import { Component } from '@angular/core';
import { ProjectComponent } from './project/project.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectComponent, CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  projects = [
    {
      name: 'Mind Meter',
      description: 'A web app where users can log meditation sessions, write journal entries, and listen to relaxing music all in one place.',
      stack: 'JavaScript React TailwindCSS Python Flask Spotify API Google API AWS',
      codeUrl: 'https://github.com/ismarjiw/Mind-Meter',
      imageUrl: '/assets/mindmeter.png',
      altText: 'A screenshot of the frontpage of Mind Meter'

    },
    {
      name: 'Text Summarizer',
      description: 'A web app that allows users to generate summaries from large text using OpenAI\'s GPT-3.5 Turbo model.',
      stack: 'JavaScript React CSS Python FastAPI',
      codeUrl: 'https://github.com/ismarjiw/text-summarizer',
      imageUrl: '/assets/summarizer.png',
      altText: 'A screenshot of the frontpage of Text Summarizer'
    },
    {
      name: 'Listify',
      description: 'A web app that allows users to have a smart shopping list that learns their buying habits and helps them remember what they are likely to need to buy on their next trip to the store.',
      stack: 'JavaScript React TailwindCSS Firebase',
      codeUrl: 'https://github.com/the-collab-lab/tcl-64-smart-shopping-list',
      imageUrl: '/assets/listify.png',
      altText: 'A screenshot of the frontpage of Listify'
    },
    {
      name: 'Let me meme it for you',
      description: 'A web app that allows users to generate random meme images to add text to and create their own custom memes.',
      stack: 'JavaScript React HTML CSS',
      codeUrl: 'https://github.com/ismarjiw/meme-generator',
      imageUrl: '/assets/meme.png',
      altText: 'A screenshot of the frontpage of Let me meme it for you'
    }
  ];
}
