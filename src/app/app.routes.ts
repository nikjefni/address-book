import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                loadComponent: () => import('./contacts/components/contact-list/contact-list.component').then(m => m.ContactListComponent)
            }
        ]
    }
];
