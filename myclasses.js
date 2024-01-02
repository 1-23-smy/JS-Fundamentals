//ES6
// class User {
//     constructor(username, email, password) {
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }
//     logMe() {
//         console.log(`The username is ${this.username}`);
//     }

//     encryptPassword() {
//         console.log(`password is ${Math.random().toLocaleString() + this.password}`)
//     }
// }

// class smallUser extends User {
//     constructor(password) {
//         super()
//         this.password = password
//     }



// }

// const user = new User("SMY", "s@gmail.com", 123);

// user.encryptPassword()

// const su = new smallUser(123)
// su.encryptPassword()


//Before ES6

function User(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function () {
    console.log(`${Math.random().toLocaleString() + this.password}`);
}

const newUser = new User("SMY", "s@gmail.com", 123);

newUser.encryptPassword()