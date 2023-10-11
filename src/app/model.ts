export class Model {
    user:any;
    itemss:any;

    
    constructor() {
        this.user = 'goktug';

        this.itemss =  [
          new ToDoItem("Yemek",false),
          new ToDoItem("Yuru",false),
          new ToDoItem("Kos",false),
        ];
    }
}

export class ToDoItem{
    desc;
    action;
    constructor(descc:any,actionn:any){
        
        this.desc=descc;
        this.action=actionn
    }
}