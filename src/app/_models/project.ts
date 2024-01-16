import { Tag } from "./tags";

export interface project{
  id:number;
  name:string;
  summary:string;
  description:string;
  projectLink:string;
  pictures:string[];
  tags:Tag[];
}
