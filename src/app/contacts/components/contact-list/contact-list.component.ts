import { Component, inject } from '@angular/core';
import { ListItemComponent } from './components/list-item/list-item.component';
import { ContactsService } from '../../../shared/services/contacts.service';
import { AddBtnComponent } from './component/add-btn/add-btn.component';

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [ListItemComponent, AddBtnComponent],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css'
})
export class ContactListComponent {
  private _service = inject(ContactsService);

  contacts = this._service.fetchContacts();
}
