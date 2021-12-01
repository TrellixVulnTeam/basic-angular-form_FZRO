export class Friend {
    nr = 0;
    id: number;
    firstName: string | null;
    lastName: string | null;
    email: string | null;
    phoneNumber: string | null;
    language: string | null;

    constructor(firstName: string | null, lastName: string | null, email: string | null, phoneNumber: string | null, language: string | null) { 
        this.id = this.setId();
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.language = language;
    }

    setId():number {
        this.nr = this.nr + 1;
        return this.nr;
    }
}
