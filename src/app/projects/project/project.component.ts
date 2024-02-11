import { NgFor, NgForOf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [NgForOf, NgFor],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  @Input() name: string = ""
  @Input() description: string = ""
  @Input() stack: string = ""
  @Input() imageUrl: string = ""
  @Input() codeUrl: string = ""
  @Input() altText: string = ""
}
