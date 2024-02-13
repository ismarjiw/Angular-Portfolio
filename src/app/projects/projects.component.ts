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
      name: 'Twitter API',
      description: [
        'Designed a RESTful Spring Boot application that mirrors the backend infrastructure and emulates the functionality of a Twitter API backend',
        'Implemented controller, service, DTO, and Mapper classes to manage core business logic and enhance the maintainability of the codebase',
        'Utilized Spring Data JPA repositories for streamlined PostgreSQL database interactions, ensuring clean and concise CRUD operations on User, Tweet, and Hashtag entities',
        'Implemented customized exception classes for scenarios such as resource not found, bad request, and not authorized',
        'Tested extensively with JUnit tests ensuring thorough coverage of critical scenarios', 
        'Validated API endpoints using Postman and automated testing with Newman for end-to-end API testing'
      ],
      stack: 'Java, Spring Boot, PostgreSQL, JUnit, Postman, Newman',
      imageUrl: '/assets/twitter.png',
      codeUrl: 'https://github.com/ismarjiw/spring-assessment-social-media-jan-2024-team-1',
      altText: 'A screenshot of the Tweet Controller and Tweet Service Implemenation classes in IntelliJ'
    },
    {
      name: 'Text Summarizer',
      description: [
        "Developed a web app using OpenAI's GPT-3.5 Turbo model, allowing users to generate concise summaries from large input text",
        'Implemented FastAPI for the backend server, ensuring efficient handling of summarization requests',
        'Designed a user-friendly interface by utilizing Vite to create a responsive and intuitive frontend for an enhanced user experience'
      ],
      stack: 'JavaScript React CSS Python FastAPI',
      codeUrl: 'https://github.com/ismarjiw/text-summarizer',
      imageUrl: '/assets/summarizer.png',
      altText: 'A screenshot of the frontpage of Text Summarizer'
    },
    {
      name: 'Listify',
      description: [
        "A web app that allows users to have a smart shopping list that learns their buying habits and helps them remember what they’re likely to need to buy on their next trip to the store",
        'Facilitated collaboration by allowing users to share and work on shopping lists with others, promoting teamwork and project management',
        'Ensured accessibility across multiple platforms, making the web app available on various devices and browsers for a seamless user experience'
      ],
      stack: 'JavaScript React TailwindCSS Firebase',
      codeUrl: 'https://github.com/the-collab-lab/tcl-64-smart-shopping-list',
      imageUrl: '/assets/listify.png',
      altText: 'A screenshot of the frontpage of Listify'
    },
    {
      name: 'Mind Meter',
      description: [
        'A web app that helps users log timed meditation sessions, write journal reflections, and listen to calming music all in one place',
        "Implemented a feature to track and log users' meditation sessions through chart.js, providing insights into a user’s meditation habits and progress over time",
        'Curated and integrated guided meditation playlists, offering users a variety of calming and focused meditation sessions to choose from'
      ],
      stack: 'JavaScript React TailwindCSS Python Flask Spotify API Google API AWS',
      codeUrl: 'https://github.com/ismarjiw/Mind-Meter',
      imageUrl: '/assets/mindmeter.png',
      altText: 'A screenshot of the frontpage of Mind Meter'

    }
  ];
}
