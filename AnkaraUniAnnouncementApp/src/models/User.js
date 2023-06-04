class User {
    constructor({
        name,
        surname,
        email
    }) {
        this.fullname = String(name) + String(surname);
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