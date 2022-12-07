import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { contact } from 'src/app/models/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact: contact=new contact();
  number :number;


  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    console.log(form.value);
  }


}
