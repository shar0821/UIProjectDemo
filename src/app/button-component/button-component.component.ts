import { componentFactoryName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { BuilderBlock } from '@builder.io/angular';

@BuilderBlock({
  tag: 'button-thing',
  name: 'button',
  inputs: [
    {
      name: 'buttonname',
      type: 'string',
    },
    {
      name: 'buttonlink',
      type: 'url',
    },
  ],
})
@Component({
  selector: 'app-button-component',
  templateUrl: './button-component.component.html',
  //template: 'Button name : ',
  styleUrls: ['./button-component.component.css'],
})
export class ButtonComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }
  
  myFunc(){
    window.alert("Button works!!:) EE HA Ha");
  }

  contentLoaded(data) {
    // Data object (via the output $event) includes your custom fields, e.g. if you have a custom field named
    // "title"
    //buttonname = data.data.buttonname
  }
  
}
