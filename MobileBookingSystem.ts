interface Contact {
    name: string;
    phoneNumber: string;
    email: string;
}

class Phonebook {
    private contacts: Contact[] = [];

    addContact(name: string, phoneNumber: string, email: string) {
        const newContact: Contact = { name, phoneNumber, email };
        this.contacts.push(newContact);
        console.log("Contact added successfully!");
    }

    searchContact(query: string) {
        const foundContacts = this.contacts.filter(
            (contact) =>
                contact.name.toLowerCase().includes(query.toLowerCase()) ||
                contact.phoneNumber.includes(query)
        );
        if (foundContacts.length > 0) {
            console.log("Found contacts:");
            foundContacts.forEach((contact) => {
                console.log(`- Name: ${contact.name}`);
                console.log(`  Phone Number: ${contact.phoneNumber}`);
                console.log(`  Email: ${contact.email}`);
            });
        } else {
            console.log("No contacts found.");
        }
    }

    deleteContact(query: string) {
        const index = this.contacts.findIndex(
            (contact) =>
                contact.name.toLowerCase() === query.toLowerCase() ||
                contact.phoneNumber === query
        );
        if (index !== -1) {
            this.contacts.splice(index, 1);
            console.log("Contact deleted successfully!");
        } else {
            console.log("Contact not found.");
        }
    }

    displayAllContacts() {
        if (this.contacts.length > 0) {
            console.log("All Contacts:");
            this.contacts.forEach((contact) => {
                console.log(`- Name: ${contact.name}`);
                console.log(`  Phone Number: ${contact.phoneNumber}`);
                console.log(`  Email: ${contact.email}`);
            });
        } else {
            console.log("No contacts found.");
        }
    }
}

// Usage example:
const phonebook = new Phonebook();

phonebook.addContact("Alice", "123-456-7890", "alice@example.com");
phonebook.addContact("Bob", "987-654-3210", "bob@example.com");

phonebook.searchContact("Alice");
phonebook.deleteContact("123-456-7890");
phonebook.displayAllContacts();