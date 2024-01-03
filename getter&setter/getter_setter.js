class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
    get email() {
        return `${this._email}@gmail.com`
    }
    set email(value) {
        this._email = value;
    }
    get password() {
        return this._password.toUpperCase();
    }
    set password(value) {
        this._password = value;
    }
}

const user = new User("smy", "smy");
console.log(user.email);
console.log(user.password);