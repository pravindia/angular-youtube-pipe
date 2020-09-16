import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {
  name = 'YouTube embed in Angular';
  YTlink:string = 'https://youtu.be/8G3uSuzfzY4';
}
