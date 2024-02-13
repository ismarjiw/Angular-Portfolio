import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { EmailService } from '../services/email.service';
import { FormsModule, NgForm } from '@angular/forms';
import { MatSnackBar as SnackBar } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ FormsModule, CommonModule, MatProgressSpinnerModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule ],
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

  loading = false;

  public sendEmail(e: Event) {
    e.preventDefault();

    this.loading = true;

    const formData = new FormData(e.target as HTMLFormElement);
    const params = {
      from_name: formData.get('name') as string,
      email_id: formData.get('email') as string,
      message: formData.get('message') as string,
    };

    this.emailService
    .sendEmail(params)
    .then(() => {
      this.loading = false;
      this.snackBar.open('Email sent successfully!', 'Close', {
        duration: 8000, // Show the message for 3 seconds
      });
    })
    .catch((error) => {
      this.loading = false;
      this.snackBar.open('Failed to send email. Please try again later.', 'Close', {
        duration: 8000, // Show the message for 5 seconds
      });
      console.error('FAILED...', error);
    });
  }
}
