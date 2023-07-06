import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'section-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>{{title}}<h2>
  `,
  styleUrls: ['./section-header.component.css']
})
export class SectionHeaderComponent {
  @Input() title: string = 'Default Title';
}
