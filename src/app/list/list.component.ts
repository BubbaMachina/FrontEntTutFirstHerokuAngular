import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  name: string = '';
  listOfNames: string[];

  constructor() { 
    this.listOfNames = ['John','Mary',"Susan"];
  }

  ngOnInit() {
  }

  addPerson(){
    this.listOfNames.push(this.name);
  }
}
