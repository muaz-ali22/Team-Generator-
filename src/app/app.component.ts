import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'TeamGenerator';
  i = 0;
  newPersonName = '';
  errorMessage = '';
  numberOfTeams: number | '' = '';
  persons: string[] = [];
  teams: string[][] = [];
  onInput(person: string) {
    this.newPersonName = person;
  }
  onNumberOfTeamsInput(value: string) {
    this.numberOfTeams = Number(value);
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

  generateTeam() {
    if (!this.numberOfTeams || this.numberOfTeams <= 0) {
      this.errorMessage = 'Invaild number of Teams';
      return;
    }
    if (this.persons.length < this.numberOfTeams) {
      this.errorMessage = 'Not Enough Members';
      return;
    }
    this.errorMessage = '';
    const allMembers = [...this.persons];

    while (allMembers.length) {
      for (let i = 0; i < this.numberOfTeams; i++) {
        const randomIndex = Math.floor(Math.random() * allMembers.length);
        const member = allMembers.splice(randomIndex, 1)[0];
        if (!member) break;
        if (this.teams[i]) {
          this.teams[i].push(member);
        } else {
          this.teams[i] = [member];
        }
      }
    }
    this.persons = [];
    this.numberOfTeams = '';
  }
}
