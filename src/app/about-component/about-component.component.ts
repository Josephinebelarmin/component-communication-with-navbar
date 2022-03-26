import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-about-component',
  templateUrl: './about-component.component.html',
  styleUrls: ['./about-component.component.css']
})
export class AboutComponentComponent implements OnInit {
  @Output() UserAboutText = new EventEmitter<any>()
  aboutText ='';

  onclick(){
    this.UserAboutText.emit(this.aboutText)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
