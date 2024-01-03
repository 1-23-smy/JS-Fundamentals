function User(email, password) {
    this._email = email;
    this._password = password;
    Object.defineProperty(this, "password", {
        get: function () {
            return this._password.toUpperCase();
        },
        set: function (val) {
            this._password = val;
        }
    })
    Object.defineProperty(this, "email", {
        get: function () {
            return this._email + "@gmail.com";
        },
        set: function (val) {
            this._email = val;
        }
    })
}
const user = new User("smy", "smy")
console.log(user.password);
console.log(user.email);