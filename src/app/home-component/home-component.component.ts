import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {
  @Output() textTyped = new EventEmitter<any>();
  inputText ='';

  onClick(){
  this.textTyped.emit(this.inputText);
  console.log("user Typed " +this.inputText)
  }
  constructor() { }

  ngOnInit(): void {
  }

}


