export class Project {

    project_id!: number;
    project_name!: string;
    project_description!: string;
    project_tools!: string;
    project_start!: string;
    project_snapshot!: string;
    project_url!: string;


    constructor (
        project_id: number,
        project_name: string,
        project_description: string,
        project_tools: string,
        project_start: string,
        project_snapshot: string,
        project_url: string
    ){
        this.project_id = project_id;
        this.project_name = project_name;
        this.project_description = project_description;
        this.project_snapshot = project_snapshot;
        this.project_start = project_start;
        this.project_tools = project_tools;
        this.project_url = project_url;
    }

}
