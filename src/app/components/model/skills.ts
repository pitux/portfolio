export class Skills {
    
    skills_name!: string;
    skills_domain!: number;
    skills_id!: number;
    

    constructor ( skills_name: string, skills_domain:number, skills_id: number) {
        
        this.skills_name = skills_name;
        this.skills_domain = skills_domain;
        this.skills_id = skills_id;

    }
}
