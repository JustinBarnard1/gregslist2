import jobsService from "../Services/JobsService.js";
import { ProxyState } from "../AppState.js";
// private
function _drawJobs() {
    let jobs = ProxyState.jobs
    let template = ''
    jobs.forEach(j => template += j.Template)
    document.getElementById('jobs').innerHTML = template
}


//Public
export default class JobsController {
    constructor() {
        ProxyState.on('jobs', _drawJobs)
        this.getJobs();
    }

    getJobs() {
        try {
            jobsService.getJobs();
        } catch (error) {
            console.error(error)
        }
    }
    createJob() {
        event.preventDefault();
        let form = event.target
        let rawJob = {
            jobTitle: form.jobTitle.value,
            description: form.description.value,
            company: form.company.value,
            rate: form.rate.value,
            hours: form.hours.value,
        }
        try {
            jobsService.createJob(rawJob)
        } catch (error) {
            console.error(error)
        }
        form.reset()
    }

    removeJob(id) {
        try {
            jobsService.removeJob(id);
        } catch (error) {
            console.error(error)
        }
    }
}