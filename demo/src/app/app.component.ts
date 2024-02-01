import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  constructor(private http:HttpClient){

  }
  data:any = null;
  getData(){
    this.http.get('https://fakestoreapi.com/products?limit=10').subscribe((data)=>{
      //console.log(data);
      this.data = data;
    })
  }
}
