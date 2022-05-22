export class Project {

    project_id!: number;
    project_name!: string;
    project_description!: string;
    project_tools!: string;
    project_start!: string;
    project_snapshot!: string;
    project_url!: string;


    constructor (
        project_name: string,
        project_description: string,
        project_tools: string,
        project_start: string,
        project_snapshot: string,
        project_url: string
    ){

    }

}
