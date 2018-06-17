import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  user={
  username:'',
  password:''};


  onSubmit(theform:NgForm) {
    this.user.username=theform.value.username;
    this.user.password=theform.value.password;

    console.log('this.user');
  }
}
