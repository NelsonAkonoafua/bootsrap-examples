import { Component, OnInit } from '@angular/core';
import emailjs, {EmailJSResponseStatus} from '@emailjs/browser';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  public sendEmail(e: Event) {
    e.preventDefault();
    console.log(e.target as HTMLFormElement)
    emailjs.sendForm('service_onqs4j1', 'template_70b54ja', e.target as HTMLFormElement, 'ANmCwxaC0sq-KfOj2')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }
}
