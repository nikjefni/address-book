import { Component, input } from '@angular/core';

@Component({
  selector: 'app-headings',
  standalone: true,
  imports: [],
  templateUrl: './headings.component.html',
  styleUrl: './headings.component.css'
})
export class HeadingsComponent {
  value = input<string>('');
}
