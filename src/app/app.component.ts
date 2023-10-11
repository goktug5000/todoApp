import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'todoApp';
  user = 'goktug';

  itemss:any =  [
    { desc: "kahvaltı", action: "no"},
    { desc: "spor", action: "no" },
    { desc: "yemek", action: "no" }
  ];
  
}
