import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Model, ToDoItem } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'todoApp';
  isDisplay=false;

  model = new Model();
  getName(){
    return this.model.user;
  }
  getItems(){
    if(this.isDisplay){
      return this.model.itemss;
    }
    else{
      return this.model.itemss.filter((item: { action: any; })=> !item.action);
    }

  }

  addItem(value:any){
    if(value!=""){
      this.model.itemss.push(new ToDoItem(value,false));
    }
  }

}
