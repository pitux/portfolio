export class Persona {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    creation_date: string;
    title: string;
    location: string;
    about_me: string;
    profile_img: string;

constructor (id: number, firstname: string, lastname: string, email: string, creation_date: string, title: string, location:string, about_me: string, profile_img: string) {
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.creation_date = creation_date;
    this.title = title;
    this.location = location;
    this.about_me = about_me;
    this.profile_img = profile_img;
}
}