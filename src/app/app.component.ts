import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'angular-demo';
  registrationform!: FormGroup;
  submit='false';
  constructor(private fb: FormBuilder) {

  }
  ngOnInit(): void {
    this.registrationform = this.fb.group({
      firstName: ['',Validators.required],
      lastName: ['',Validators.required],
      phone: ['',[Validators.required,Validators.pattern('[0-9]{10}')]],
      email: ['',[Validators.required,Validators.email]]

    })
   

  }
  get f(){
    return this.registrationform.controls;
  }
  onsubmit(){
    this.submit='true'
    console.log("clicked")
  }



}
