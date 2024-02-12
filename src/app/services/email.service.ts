import { Injectable } from '@angular/core';
import * as emailjs from 'emailjs-com';
import { EmailJSResponseStatus } from 'emailjs-com';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  
  emailJsApiKey = import.meta.env.EMAIL_JS_API_KEY;

  constructor() { }

  async sendEmail(params: any): Promise<EmailJSResponseStatus> {
    try {
      const response = await emailjs.send('service_afx1ew2', 'template_ki80x5j', params, this.emailJsApiKey);
      console.log('Email sent successfully:', response);
      return response;
    } catch (error) {
      console.error('Email sending failed:', error);
      throw error;
    }
  }
}
