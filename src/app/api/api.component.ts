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
  itemName: string;
  itemQuantity: number;
  itemBought: boolean = false;
  item: any;
  constructor(private http: HttpClient) {

   }

  ngOnInit() {
  }
  getData(){
    this.http.get('https://api.github.com/users/'+ this.name).subscribe((response)=>{
    this.resp = response;
    })
  }

  postItem(){
    this.item = {itemName: this.itemName,
    itemQuantity: this.itemQuantity,
    itemBought: this.itemBought
    };
    this.http.post('https://secure-everglades-87012.herokuapp.com/item',this.item).subscribe((res)=>{
    console.log(res);
    });
  }
}
