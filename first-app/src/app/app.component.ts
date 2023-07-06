import { Component } from '@angular/core';
import { ContactInformationComponent } from './contact-information/contact-information.component';
import { SectionHeaderComponent } from './section-header/section-header.component';
import { DetailedListComponent } from './detailed-list/detailed-list.component';
import { ExperienceOverviewComponent } from './experience-overview/experience-overview.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ContactInformationComponent,
    SectionHeaderComponent,
    DetailedListComponent,
    ExperienceOverviewComponent
  ],
  template: `
  <section class="header">
    <img class="logo" src="/assets/MT.jpg">
    <h1>Marcos Taraf</h1>
    <contact-information></contact-information>
    <h2>Junior Software Developer</h2>
  </section>
  <p id="overview">{{overview}}</p>
  <section class="experience">
    <section-header title="Professional Experience"></section-header>
    <experience-overview [title]="jobTitleOne" [organization]="jobOrganizationOne" [dates]="jobOneDates"></experience-overview>
    <detailed-list [elements]="jobOneDescription"></detailed-list>
    <experience-overview [title]="jobTitleTwo" [organization]="jobOrganizationTwo" [dates]="jobTwoDates"></experience-overview>
    <detailed-list [elements]="jobTwoDescription"></detailed-list>
  </section>
  <section class="education">
    <section-header title="Education"></section-header>
    <experience-overview [title]="educationTitleOne" [organization]="university" [dates]="educationDatesOne"></experience-overview>
    <p>GPA: 3.69</p>
    <experience-overview [title]="educationTitleTwo" [organization]="university" [dates]="educationDatesTwo"></experience-overview>
    <p>GPA: 3.61</p>
  </section>
  <section>
    <section-header title="My Links"></section-header>
    <a href="https://github.com/mtaraf">GitHub</a>
    <br>
    <a href="https://www.linkedin.com/in/marcos-taraf/">LinkedIn</a>
    <br>
  </section>
  <section class="skills">
    <section-header title="Key Skills"></section-header>
    <detailed-list [elements]="keySkills"></detailed-list>
  </section>
`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public overview = `Versatile full-stack software developer equally comfortable with Java with Spring Boot,
  Ajax restful services, HTML and CSS orC++/C# creating solutions for on-premises or cloud-based deployments.
  Exploits Agile development methodologies to rapidly iterateand improve products. Consistent provider of
  useful and actionable input on all projects. Passionate to learn about newtechnologies being developed in
  the industry.`;

  public jobTitleOne = 'Junior Cloud Java Software Developer';
  public jobOrganizationOne = 'Manhattan Associates';
  public jobOneDates = 'May 2022 - May 2023';
  public jobOneDescription: string[] = [
  `
   Developed highly optimized code for the Warehouse Management team in a hybrid local and cloud environment.
  `,
  `
  Developed unit, component, and Cucumber automation tests using Postman, MySQL, and logging frameworks.
  `,
  `
  Wrote internal utility client-server application using HTML/CSS/JavaScript connected to Spring boot with Ajax restful
  calls using JPA persistence deployed to Docker for our on-premises deployment.
  `,
  `
  Gained experience using Jira Workforce Software and Git code management system in an Agile two-week sprint cycle.
  `
  ];

  public jobTitleTwo = 'Firmware Quality Assurance Intern';
  public jobOrganizationTwo = 'Automation Direct';
  public jobTwoDates = 'April 2021 - July 2021';
  public jobTwoDescription: string[] = [
  `
   Completed tests on different types of CPUs with various additional modules.
  `,
  `
  Developed C++ components for the firmware used by the company’s Programmable Logic Controllers (PLCs)
  `,
  `
  Wrote internal basic QA defect report dashboard using HTML/CSS/JavaScript to interact with a Spring Boot controller and JPA persistence using a Tomcat server.
  `,
  `
  Gained experience using a command-line debugging tool for the CPUs being tested.
  `
  ];

  public university = 'University of Georgia';
  public educationTitleOne = 'Bachelor\'s in Computer Science';
  public educationDatesOne = 'August 2016 - December 2020';
  public educationTitleTwo = 'Master\'s in Computer Science';
  public educationDatesTwo = 'December 2020 - May 2022';

  public keySkills: string[] = [
    `
  Agile Development Methodologies
  `,
    `
  Programming Languages: Java, C#, C, C++, Python
  `,
    `
  Database Experience: MySQL, SQLite
  `,
    `
  Cloud Services Experience: Docker client, Amazon Web Services (AWS) and Google Cloud Platform (GCP)
  `,
    `
  Unity Development Experience: Completed the junior programmer pathway on Unity Learn
  `,
    `
  Experience using test driven development to create unit and component tests.
  `,
    `
  Java Frameworks: JUnit, Mockito, TestNG, Spring Boot
  `,
    `
  Jira, Git, Bitbucket, Jenkins, Maven
  `,
    `
  Front-end technologies experience: HTML/CSS/JavaScript using Ajax Restful APIs with JSON artifacts.
  `,
    `
  Dev Tools knowledge to debug front-end code, verify CSS and network traffic.
  `,
    `
  Front-end framework learning path: Flutter, React and Angular.
  `
  ];
}
