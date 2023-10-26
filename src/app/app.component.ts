import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TeamGenerator';
  newPersonName='';
  persons:string[]=[];
onInput(person:string){
this.newPersonName=person;
console.log(this.newPersonName);
}

  addPerson(){
    this.persons.push(this.newPersonName);
    console.log(this.persons);
  }
}
