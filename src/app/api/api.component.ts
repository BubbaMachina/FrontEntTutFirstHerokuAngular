import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {
  name: string;
  resp: any;
  constructor(private http: HttpClient) {

   }

  ngOnInit() {
  }
  getData(){
    this.http.get('https://api.github.com/users/'+ this.name).subscribe((response)=>{
    this.resp = response;
    })
  }
}
