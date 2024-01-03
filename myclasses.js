// ES6
class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }
    logMe() {
        console.log(`The username is ${this.username}`);
    }

    // encryptPassword(password) {
    //     this.password=password
    //     console.log(`password is + ${this.password}`)
    // }
}

class smallUser extends User {
    constructor(password) {
        super(password)
    }



}

const user = new User("SMY", "s@gmail.com", 123);

user.encryptPassword()

const su = new smallUser(123)
console.log(su);



// Before ES6

function Users(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

Users.prototype.encryptPassword = function () {
    console.log(`${Math.random().toLocaleString() + this.password}`);
}

const newUser = new Users("SMY", "s@gmail.com", 123);

newUser.encryptPassword()