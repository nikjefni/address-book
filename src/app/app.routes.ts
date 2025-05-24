import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./contacts/components/contact-list/contact-list.component').then(m => m.ContactListComponent)
    },
    {
        path: 'contact/:id',
        loadComponent: () => import('./contacts/components/contact-detail/contact-detail.component').then(m => m.ContactDetailComponent)
    },
    {
        path: 'add',
        loadComponent: () => import('./contacts/components/contact-detail/contact-detail.component').then(m => m.ContactDetailComponent)
    }
];
