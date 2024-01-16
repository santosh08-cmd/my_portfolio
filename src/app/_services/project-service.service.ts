import { Injectable } from '@angular/core';
import { project } from '../_models/project';
import { Tag } from '../_models/tags';

@Injectable({
  providedIn: 'root'
})
export class ProjectServiceService {

  constructor() { }

  projects:project[]=[
    {id:0,name:"sample python project",summary:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, impedit.",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam iusto alias at! Excepturi culpa veniam cum quos eveniet dignissimos ipsum!",tags:[Tag.PYTHON,Tag.TYPESCRIPT],pictures:['../../assets/images/img2.avif', '../../assets/images/img3.avif','../../assets/images/img4.avif'],projectLink:""},
    {id:0,name:"sample python project",summary:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, impedit.",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam iusto alias at! Excepturi culpa veniam cum quos eveniet dignissimos ipsum!",tags:[Tag.PYTHON],pictures:[],projectLink:""},
    {id:0,name:"sample python project",summary:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, impedit.",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam iusto alias at! Excepturi culpa veniam cum quos eveniet dignissimos ipsum!",tags:[Tag.PYTHON],pictures:[],projectLink:""},
    {id:0,name:"sample python project",summary:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, impedit.",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam iusto alias at! Excepturi culpa veniam cum quos eveniet dignissimos ipsum!",tags:[Tag.PYTHON],pictures:[],projectLink:""},
    {id:0,name:"sample python project",summary:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, impedit.",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam iusto alias at! Excepturi culpa veniam cum quos eveniet dignissimos ipsum!",tags:[Tag.PYTHON],pictures:[],projectLink:""},
    {id:0,name:"sample python project",summary:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, impedit.",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam iusto alias at! Excepturi culpa veniam cum quos eveniet dignissimos ipsum!",tags:[Tag.PYTHON],pictures:[],projectLink:""},
  ];


  getProjects(){
    return this.projects;
  }
  getProjectById(id:number):project{
    let project=this.projects.find(project=>project.id==id);
    if(project===undefined){
      throw new TypeError('There is no project that matches the id:' +id);
    }
    return project;
  }

  GetProjectsByFilter(filterTags:Tag[]){
    let filteredProjects:project[]=[];
    this.projects.forEach(function(project){

      let foundAll=true;
      filterTags.forEach(function(filterTag){
        if(project.tags.includes(filterTag)==false){
          foundAll=false;
        }
      });
      if(foundAll){
        filteredProjects.push(project);
      }
    });
    return filteredProjects;
    }
  }

