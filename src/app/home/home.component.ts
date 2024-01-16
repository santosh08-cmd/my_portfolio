import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectServiceService } from '../_services/project-service.service';
import { project } from '../_models/project';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  featuredProject={} as project;

  constructor(private titleService:Title,private projectService:ProjectServiceService){
    this.titleService.setTitle('santosh-home');
  }
  ngOnInit(): void {

    this.featuredProject=this.projectService.getProjectById(0);

  }



}
