export class Studies {

    studies_id: number;
    studies_title: string;
    studies_institute: string;
    studies_year: string;
    studies_logo: string;

    constructor(
        studies_title: string,
        studies_insitute: string,
        studies_year: string,
        studies_logo: string
        ){
            this.studies_title = studies_title;
            this.studies_institute = studies_insitute;
            this.studies_year = studies_year;
            this.studies_logo = studies_logo
        }

}
