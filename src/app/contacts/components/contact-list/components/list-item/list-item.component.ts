import { Component, OnInit, input } from '@angular/core';
import { Contact } from '../../../../../shared/models/contact.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-item',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.css'
})
export class ListItemComponent {
  value = input<Contact>();
  index = input<number>();

}
