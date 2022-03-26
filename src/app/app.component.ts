
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'homeAssign3';
  selectedMenu = 'home';

  textReceived = '';
  isButtonClicked = false;
  linkclick(menu: string){
    this.selectedMenu = menu;
  }

  onTextRecived(textTyped : any){
    this.isButtonClicked = true;
    console.log("textReceived  " +textTyped)
this.textReceived = textTyped;
  }

  oncontactText(contactText: any){
    this.isButtonClicked = true;
    console.log("contact Text is " + contactText)
this.textReceived = contactText;
  }
  onAboutTextReceived(aboutText: any){
    this.isButtonClicked = true;
    console.log("About Text is " + aboutText)
    this.textReceived = aboutText;
  }
}
