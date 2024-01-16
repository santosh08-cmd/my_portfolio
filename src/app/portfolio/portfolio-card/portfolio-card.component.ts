import { Component, Input } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { project } from 'src/app/_models/project';
import { ProjectModalComponent } from './project-modal/project-modal.component';

@Component({
  selector: 'app-portfolio-card',
  templateUrl: './portfolio-card.component.html',
  styleUrls: ['./portfolio-card.component.css']
})
export class PortfolioCardComponent {

  @Input() project={} as project;

  bsModalRef?:BsModalRef;

  constructor(private modalService:BsModalService){

  }

  OpenProjectModel(){

    const modalOptions:ModalOptions={
      class:"modal-lg",
      initialState:{
        project:this.project,
      }
    };
    this.bsModalRef =this.modalService.show(ProjectModalComponent,modalOptions);
  }



}
