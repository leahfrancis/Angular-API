import { Component,OnInit } from '@angular/core';
import { ApiCallService } from './api-call.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private getApi:ApiCallService){}
  postArray:any=[];
  ngOnInit(){
   
this.getApi.getpost().subscribe((res =>{
  this.postArray=res
  console.log(this.postArray)
}

))
  }

title = 'angular-demo';
  //Str=""
  //count=0;
  //evenorodd="even";
  //EvenorOdd=""
  //ishidden=true;
  /*Functionone(){
    this.Str="Good Morning!"
  }
  Functiontwo(){
    this.Str="Good Afternoon!"
  }*/
 /* increment(){
    this.count+=1;
    if(this.count%2==0){
      this.evenorodd="even";
    }
    else{
      this.evenorodd="odd";
    }
  }
  decrement(){
    this.count-=1;
    if(this.count%2==0){
      this.evenorodd="even";
    }
    else{
      this.evenorodd="odd";
    }
  }
check(){
  this.ishidden=false;
  if(this.count%2==0)
  {
    this.EvenorOdd="even"
  }
  else{
    this.EvenorOdd="odd"
  }
}*/
}
