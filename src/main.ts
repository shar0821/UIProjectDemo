import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule } from '@angular/core';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { BuilderModule } from '@builder.io/angular';
import { BuilderBlock } from '@builder.io/angular';
import { Component, Input } from '@angular/core';
//import { ButtonComponentComponent } from './app/button-component/button-component.component';

@NgModule({
  imports: [ BuilderModule.forRoot('fb39763560ba4c39959923ab41e49eec') ],
})

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
  template: '<button>CLICK ME!</button>',
})
export class ButtonComponent{}
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
