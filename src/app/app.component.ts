import { Component } from '@angular/core';

import { DataService } from './data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /*
  title = 'myfirstapp';
  users: string[] = ['Pedro','Pablo','Leon','Jaramillo','Juancito'];
  activated: boolean = true;

  name: string;
  age: number;
  address: {
    street: string;
    city: string;
  }
  hobbies: string[];
  constructor()
  {
    this.name = 'Ryan Ray';
    this.age = 28;
    this.address = {
      street: '2218 Baker Street',
      city: 'London'
    }
    this.hobbies = ['Swimming','read','write'];
  }
  */
 
 users: string[] = ['joe','ryan','cameron'];
 posts = [];

 sayHello(userName)
 {
   alert("Hello" + " "+ userName);
 }
 deleteUser(user)
 {
   for(let i = 0;i < this.users.length;i++)
   {
     if(user==this.users[i])
     this.users.splice(i,1);
   }
 }
 addUser(newUser)
 {
   console.log(newUser.value);
   this.users.push(newUser.value);
   newUser.value = '';
   newUser.focus();
   return false;
 }

  constructor(private dataService: DataService)
  {
    this.dataService.getData().subscribe(data => 
    {
      //console.log(data);
      this.posts = data;
    });  
  }
}
