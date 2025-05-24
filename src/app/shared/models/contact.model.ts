export interface Contact {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
}

export const ContactExamples: Contact[] = [
    {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        phone: '1234567890',
        address: '123 Main St, Anytown, USA',
    },
    {
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'jane.doe@example.com',
        phone: '1234567890',
        address: '123 Main St, Anytown, USA',
    },
    {
        firstName: 'Nik',
        lastName: 'Jefni',
        email: 'Nik.Jefni@example.com',
        phone: '1234567890',
        address: '123 Main St, Anytown, USA',
    }
]