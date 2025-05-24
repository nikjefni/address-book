import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-headings',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './headings.component.html',
  styleUrl: './headings.component.css'
})
export class HeadingsComponent {
  value = input<string>('');
}
