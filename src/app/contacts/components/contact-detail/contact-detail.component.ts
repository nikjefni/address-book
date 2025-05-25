import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactsService } from '../../../shared/services/contacts.service';
import { Contact } from '../../../shared/models/contact.model';

type AddOrUpdateType = 'add' | 'update';

@Component({
  selector: 'app-contact-detail',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact-detail.component.html',
  styleUrl: './contact-detail.component.css'
})
export class ContactDetailComponent {
  index !: number
  contact !: Contact;

  constructor(
    private fb: FormBuilder,
    private _ar: ActivatedRoute,
    private _service: ContactsService,
    private _router: Router
  ) {
    this.index = this._ar.snapshot.params['id'];
    this.addOrUpdate = this.index ? 'update' : 'add'; // update form type
    this.initForm(this._service.fetchContactByIndex(this.index));
  }

  userForm!: FormGroup;
  submitted = false;
  addOrUpdate: AddOrUpdateType = 'add';


  get f() { return this.userForm.controls; }

  initForm(contact: Contact | undefined): void {
    this.userForm = this.fb.group({
      firstName: [contact?.firstName || '', [Validators.required, Validators.minLength(2)]],
      lastName: [contact?.lastName || '', [Validators.required, Validators.minLength(2)]],
      address: [contact?.address || '', [Validators.required, Validators.minLength(2)]],
      email: [contact?.email || '', [Validators.required, Validators.email]],
      phone: [contact?.phone || '', [Validators.required, Validators.pattern(/^(\+\d{1,3}[- ]?)?\d{10}$/)]]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.userForm.invalid) return;

    if (this.addOrUpdate === 'add') {
      this._service.addContact(this.userForm.value);
    } else {
      this._service.patchContact(this.index, this.userForm.value);
    }

    this._router.navigate(['/']);
  }

  onReset() {
    this.submitted = false;
    this.userForm.reset();
  }

  onDelete() {
    this._service.deleteContact(this.index);
    this._router.navigate(['/']);
  }
}

