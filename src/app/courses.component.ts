import { Component } from "@angular/core";

@Component({
    selector:'courses',
    template:`
    <button (click) = "onSave()">Save</button>
    
    `
})


export class CoursesComponent{
onSave(){
    console.log("Button was clicked");
}
}