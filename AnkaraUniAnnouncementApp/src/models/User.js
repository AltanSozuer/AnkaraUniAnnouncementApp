class User {
    constructor({
        name,
        surname,
        email
    }) {
        this.name = String(name);
        this.surname = String(surname);
        this.email = String(email);
    }
}

class UserWithPass extends User{
    constructor({
        password,
        ...userFields
    }) {
        super(userFields)
        this.password = String(password);
    }
}


export {
    UserWithPass
}