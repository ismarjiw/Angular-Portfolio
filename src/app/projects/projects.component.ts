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
      name: 'JS Quizler',
      description: [
        'Developed a custom JavaScript library for a command-line quiz application',
        'Implemented essential helper functions within the lib.js file to facilitate quiz building and taking functionalities',
        'Demonstrated adaptability to new technologies and proficiency in JavaScript development through the integration of external libraries with custom-built functionalities to deliver a robust command-line quiz application'
      ],
      stack: 'JavaScript, Node.js, Inquirer.js, Vorpal.js, Mocha',
      imageUrl: '/assets/quizler.png',
      codeUrl: 'https://github.com/ismarjiw/js-assignment-quizler',
      altText: 'A screenshot of the lib.js file in VSCode'
    },
    {
      name: 'JS Declarative',
      description: [
        'Implemented a declarative implementation of the calculateTotal method'
      ],
      stack: 'JavaScript, Node.js, Mocha',
      imageUrl: '/assets/declarative.png',
      codeUrl: 'https://github.com/ismarjiw/js-assignment-declarative',
      altText: 'A screenshot of the declarative implementation of calculateTotal'
    },
    {
      name: 'JS Primer',
      description: [
        'Implemented a calculateTotal method which calculates the total of a given array of items depending on their price and if they have a tax applied to them or not'
      ],
      stack: 'JavaScript, Node.js, Mocha',
      imageUrl: '/assets/primer.png',
      codeUrl: 'https://github.com/ismarjiw/js-assignment-primer',
      altText: 'A screenshot of the calculateTotal method'
    },
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
      name: 'Quiz API',
      description: [
        'Developed a RESTful API using Spring Boot to simulate backend functionality for a quiz application',
        'Implemented controller, service, and repository classes to manage endpoints for CRUD operations on quizzes, questions, and answers',
        'Utilized Spring Data JPA to interact with a PostgreSQL database, ensuring efficient handling of entity relationships and data persistence',
        'Created customized exception classes to handle scenarios such as resource not found and bad requests',
        'Conducted thorough testing with JUnit to validate critical functionalities and ensure code reliability',
        'Tested API endpoints using Postman for comprehensive end-to-end testing of the API'
      ],
      stack: 'Java, Spring Boot, PostgreSQL, JUnit, Postman',
      imageUrl: '/assets/quiz.png',
      codeUrl: 'https://github.com/ismarjiw/spring-assignment-quiz-api',
      altText: 'A screenshot of the Quiz Controller and Quiz Service Implementation classes in IntelliJ'
    },
    {
      name: 'Collections',
      description: [
        'Developed a hierarchical employee management system with classes for Managers and Workers in Java',
        'Implemented an interface, Employee, with methods for retrieving employee information and chain of command',
        'Designed classes Manager and Worker with constructors and methods to manage employee hierarchy and relationships',
        'Implemented logic to add employees to the organization chart considering hierarchy and existing structure',
        'Created methods to retrieve all employees, managers, direct subordinates, and the full hierarchy of the organization chart',
        'Conducted comprehensive JUnit testing to ensure the functionality and reliability of the hierarchical employee management system'
      ],
      stack: 'Java, JUnit',
      imageUrl: '/assets/collections.png',
      codeUrl: 'https://github.com/ismarjiw/java-assignment-collections',
      altText: 'A screenshot of the OrgChart and Manager classes in IntelliJ'  
    },
    {
      name: 'Schema Design',
      description: [
        'Created a database schema in pgAdmin representing People, their Location, and their Interests',
        'Wrote SELECT statements to gather information such as names of people using the application, count of people living in select cities, and count of people with particular interests'
      ],
      stack: 'SQL, PostgreSQL, pgAdmin',
      imageUrl: '/assets/schema.png',
      codeUrl: 'https://github.com/ismarjiw/java-assignment-schema-design',
      altText: 'A screenshot of the ERD in pgAdmin'
    },
    {
      name: 'Rationals',
      description: [
        'Developed a rational number system implementation in Java, including interfaces and concrete classes to represent rational numbers', 
        'Utilized shared code between Rational and SimplifiedRational classes via a specializable constructor method defined in the IRational interface',
        'Employed Euclidean algorithm-based greatest common denominator calculation to simplify rational numbers',
        'Conducted thorough testing using JUnit to validate the correctness and robustness of the rational number system implementation'
      ],
      stack: 'Java, JUnit',
      imageUrl: '/assets/rationals.png',
      codeUrl: 'https://github.com/ismarjiw/java-assignment-rationals',
      altText: 'A screenshot of the Rational and SimplifiedRational classes open in IntelliJ'
    },
    {
      name: 'Fibonacci & FizzBuzz',
      description: [
        'Developed Java classes Fibonacci and FizzBuzz to implement two classic programming exercises, showcasing control flow and algorithmic thinking',
        'Implemented methods in the Fibonacci class to calculate Fibonacci sequence elements, adhering to the recursive definition of the Fibonacci sequence',
        'Implemented methods in the FizzBuss class to generate divisibility messages according to specified rules demonstrating proficiency in conditional logic',
        'Utilized exception handling to validate input parameters and ensure robustness of the code, throwing appropriate exceptions for invalid arguments'
      ],
      stack: 'Java, JUnit',
      imageUrl: '/assets/fib-buzz.png',
      codeUrl: 'https://github.com/ismarjiw/java-assignment-fibonacci-fizzbuzz',
      altText: 'A screenshot of the Fibonacci and FizzBuzz classes open in IntelliJ'
    },
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
