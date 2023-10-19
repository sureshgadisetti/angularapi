import { Component } from '@angular/core';
import {UsersService} from './users.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'blog';
  data:any = [];
  constructor(private users_service:UsersService){
    this.users_service.getData().subscribe((data) =>{
      console.log(data);
      this.data = data;
    })
  }
}
