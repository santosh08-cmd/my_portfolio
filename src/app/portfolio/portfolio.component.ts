import { Component, OnChanges, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { project } from '../_models/project';
import { Tag } from '../_models/tags';
import { ProjectServiceService } from '../_services/project-service.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
 projects={} as project[];
 iscollapsed:boolean=true;
 typescript:boolean=false;
 javascript:boolean=false;
 python:boolean=false;
 java:boolean=false;
 dotNet:boolean=false;
 angular:boolean=false;

 filtering:boolean=false;


  constructor(private titleService:Title, private projectService:ProjectServiceService){
    this.titleService.setTitle('santosh-Portfolio');
  }


  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
  }

  Filter(){
    let filterTags:Tag[]=[];


       if(this.typescript){
        filterTags.push(Tag.TYPESCRIPT);
       }
       if(this.javascript){
        filterTags.push(Tag.JAVASCRIPT);
       }
       if(this.python){
        filterTags.push(Tag.PYTHON);
       }
       if(this.java){
        filterTags.push(Tag.JAVA);
       }
       if(this.dotNet){
        filterTags.push(Tag.CSHARP);
       }

       if(this.angular){
        filterTags.push(Tag.ANGULAR);
       }

       if(this.typescript || this.javascript || this.python || this.java || this.dotNet || this.angular){
        this.filtering=true;
       }else{
        this.filtering=false;
       }
    this.projects=this.projectService.GetProjectsByFilter(filterTags)
  }

  ResetFilters(){
    this.python=false;
    this.dotNet=false;
    this.typescript=false;
    this.javascript=false;
    this.java=false;
    this.angular=false;
    this.filtering=false;

    this.projects=this.projectService.getProjects();
  }







}
