import { CommonModule, NgFor, NgForOf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  @Input() name: string = ""
  @Input() description: string[] | string = []
  @Input() stack: string = ""
  @Input() imageUrl: string = ""
  @Input() codeUrl: string = ""
  @Input() altText: string = ""

  getDescriptionArray(): string[] {
    if (typeof this.description === 'string') {
      return [this.description];
    }
    return this.description;
  }
}
