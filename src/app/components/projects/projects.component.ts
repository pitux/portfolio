import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder } from '@angular/forms';

import { TokenService } from 'src/app/security/service/token.service';
import { ProjectsService } from 'src/app/service/projects.service';
import { Project } from '../model/project';

@Component({
  selector: 'app-projects-1',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {


  editProject!: Project;
  closeResult: string = '';

  public projects!: Project[];

  roles!: string[];
  isAdmin: boolean = false;
  addProject: any;

  constructor(
    private projectService: ProjectsService,
    private tokenService: TokenService,
    private formBuilder: FormBuilder,
    private modalService: NgbModal
    ) {
    this.addProject = this.formBuilder.group({
      project_id!: '',
      project_name!: '',
      project_description!:'',
      project_tools!: '',
      project_start!: '',
      project_snapshot!: '',
      project_url!: '',
      });
    }

  ngOnInit(): void {
    this.listProject();
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
//      console.log("Projects - User is admin: " + this.isAdmin);
    });
  }
/**
 * We're calling the listProjects() function from the projectService, which returns an observable.
 * We're subscribing to that observable, and when the data is returned, we're assigning it to the
 * projects variable
 */
  listProject():void{
    this.projectService.listProjects().subscribe(
      data => {
        this.projects = data;
      },
      err => {
        console.log(err);
      }
    )
  }

/**
 * The open() function takes a modal component as its first argument, and an optional second argument
 * that is an object containing key/value pairs of custom modal options
 * @param {any} content - This is the content that will be displayed in the modal.
 */
  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  } 

/**
  * It returns a string that describes the reason why the modal was closed
  * @param {any} reason - The reason that the modal was closed.
  * @returns The reason for the modal being dismissed.
  */
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  /**
   * The function onAddProject() is called when the user clicks on the button "Agregar Proyecto" in the
   * modal window. The function receives the form data as a parameter and sends it to the server using
   * the saveProject() method of the projectService service
   * @param {NgForm} addProjectForm - NgForm
   */

  public onAddProject(ProjectAdded: any) {
        
    console.log(ProjectAdded);
    

  }

  public onUpdateProject(){

}

public onDeleteProject(id: number):void {

    console.log("projects/delete/" + id);
    
    alert("Are you sure?")

    this.projectService.deleteProject(id).subscribe(
    (response: void) => {
  console.log(response);
      this.listProject();
      
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  )
  
}

}
