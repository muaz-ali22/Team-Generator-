import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TeamGenerator';
  newPersonName='';
  person:string[]=[];
onInput(person:string){
this.newPersonName=person;
}

  addPerson(){
    this.person.push(this.newPersonName);
    console.log(this.person);
  }
}
