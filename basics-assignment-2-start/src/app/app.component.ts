import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  userName = "";
  isNameEmpty = true;

  constructor(){}

  checkUserName(event : Event){
    this.userName = (<HTMLInputElement>event.target).value;
    if(this.userName != ""){
      this.isNameEmpty = false;
    }
    else
      this.isNameEmpty = true;

    return this.userName;
  }

  resetUserName(){
      this.userName = "";
      this.isNameEmpty = true;
  }
}
