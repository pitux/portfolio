export class Job {
    job_name: string;
    job_place: string;
    job_year: string;
    idjobs: number;

constructor(
    job_name: string,
    job_place: string,
    job_year: string
){
    this.job_name = job_name;
    this.job_place = job_place;
    this.job_year = job_year;
}

}