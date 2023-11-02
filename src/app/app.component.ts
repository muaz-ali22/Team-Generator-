import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'TeamGenerator';
  newPersonName = '';
  errorMessage = '';
  persons: string[] = [];
  onInput(person: string) {
    this.newPersonName = person;
  }

  addPerson() {
    if (!this.newPersonName) {
      this.errorMessage = 'Please Enter a Name';
      return;
    }
    this.errorMessage = '';
    this.persons.push(this.newPersonName);
    this.newPersonName = '';
  }
}
