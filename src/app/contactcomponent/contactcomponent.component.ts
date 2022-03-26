import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-contactcomponent',
  templateUrl: './contactcomponent.component.html',
  styleUrls: ['./contactcomponent.component.css']
})
export class ContactcomponentComponent implements OnInit {

  @Output() userText =new EventEmitter<any>()
  contactText = '';
  constructor() { }

  onClick(){
    this.userText.emit(this.contactText)
  }
  ngOnInit(): void {
  }

}
