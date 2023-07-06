import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'experience-overview',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h3>{{title}}</h3>
    <h4>{{organization}} | {{dates}}</h4>
  `,
  styleUrls: ['./experience-overview.component.css']
})
export class ExperienceOverviewComponent {
  @Input() title: string = 'Default Title';
  @Input() organization: string = 'Default Organization';
  @Input() dates: string = 'May 2000 - May 2001';
}
