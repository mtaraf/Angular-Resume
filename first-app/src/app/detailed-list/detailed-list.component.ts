import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'detailed-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ul>
      <li *ngFor="let element of elements">
        {{element}}
      </li>
    </ul>
  `,
  styleUrls: ['./detailed-list.component.css']
})
export class DetailedListComponent {
  @Input() elements: string[] = ['hi', 'hello', 'bye'];
}
