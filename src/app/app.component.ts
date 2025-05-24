import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeadingsComponent } from './shared/components/headings/headings.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeadingsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'address-book';
}
