import { Injectable } from '@angular/core';
import { Contact, ContactExamples } from '../models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor() { }

  private contacts: Contact[] = ContactExamples;

  addContact(contact: Contact): void {
    this.contacts.push(contact);
  }

  fetchContacts(): Contact[] {
    return this.contacts;
  }

  fetchContactByIndex(index: number): Contact {
    return this.contacts[index - 1];
  }

  patchContact(index: number, contact: Contact): void {
    this.contacts[index - 1] = contact;
  }

  deleteContact(index: number): void {
    this.contacts.splice(index - 1, 1);
  }
}
