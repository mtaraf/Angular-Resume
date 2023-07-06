import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'contact-information',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      {{streetName}}<br>{{address}}<br>{{email}}<br>{{phoneNumber}}
    </p>
  `,
  styleUrls: ['./contact-information.component.css']
})
export class ContactInformationComponent {
  public streetName;
  public address;
  public email;
  public phoneNumber;


  constructor() {
    this.streetName = '36 Stonehaven Drive';
    this.address = 'Dawsonville, GA 30534';
    this.email = 'marcostaraf@gmail.com';
    this.phoneNumber = '678.925.6240';
  }
}
