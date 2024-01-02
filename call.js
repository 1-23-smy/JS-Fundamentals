function setUsername(username) {
  this.username = username;
}

function createUsername(username, email, password) {
    setUsername.call(this,username); // After the function is called the execution context is also removed then the data members inside it they are also removed. To hold the referrence we use call method. 

    this.email = email;
    this.password = password
}

const res = new createUsername("sMY", "s@gmail.com", 1234);
console.log(res);