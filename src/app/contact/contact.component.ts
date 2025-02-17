import { Component } from '@angular/core';
import { MailserviceService } from '../mailservice.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule,BrowserModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  mail = {
    name: '',
    email: '',
    message: ''
  };
  sendMessage(){
  alert('Thank you for connecting.');
}
}
