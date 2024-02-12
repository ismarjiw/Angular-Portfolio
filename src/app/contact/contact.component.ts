import { Component } from '@angular/core';
import { EmailService } from '../services/email.service';
import { FormsModule, NgForm } from '@angular/forms';
import { MatSnackBar as SnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ FormsModule ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  providers: [ EmailService ]
})
export class ContactComponent {

  name: string = ""; 
  email: string = ""; 
  message: string = "";

  constructor(private emailService: EmailService,
              private snackBar: SnackBar) { }

  onSubmit(form: NgForm, e: Event): void {
    e.preventDefault();
    this.sendEmail(e);
    form.resetForm(); 
  }

  public sendEmail(e: Event) {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const params = {
      from_name: formData.get('name') as string,
      email_id: formData.get('email') as string,
      message: formData.get('message') as string,
    };

    this.emailService
    .sendEmail(params)
    .then(() => {
      // Show a success message to the user
      this.snackBar.open('Email sent successfully!', 'Close', {
        duration: 3000, // Show the message for 3 seconds
      });
    })
    .catch((error) => {
      // Show an error message to the user
      this.snackBar.open('Failed to send email. Please try again later.', 'Close', {
        duration: 5000, // Show the message for 5 seconds
      });
      console.error('FAILED...', error);
    });
  }
}
