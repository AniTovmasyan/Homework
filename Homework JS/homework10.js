//Task 1
// Create an Author class and a Book class.
// Author should have: name, email, gender.
// It should have appropriate getters and setters.
// It should have a toString method.
// Book should have: title, author(Author), price, quantity.
// It should have appropriate getters and setters.
// It should have a method: getProfit(), which calculates the profit from the book based on
// the price and quantity.
// It should have a toString method.

class Author {
  constructor(name, email, gender) {
    this.name = name;
    this.email = email;
    this.gender = gender;
  }
  get name() {
    return this._name;
  }
  set name(v) {
    this._name = v;
  }
  get email() {
    return this._email;
  }
  set email(v) {
    this._email = v;
  }
  get gender() {
    return this._gender;
  }
  set gender(v) {
    this._gender = v;
  }

  toString() {
    return (
      "Name- " +
      this.name +
      ", Email- " +
      this.email +
      ", Gender- " +
      this.gender
    );
  }
}
let a = new Author("Ani", "ani2002@gmail.com", "f");

class Book extends Author {
  constructor(title, name, email, gender, price, quantity) {
    super(name, email, gender);
    this.title = title;
    this.price = price;
    this.quantity = quantity;
  }
  get title() {
    return this._title;
  }
  set title(v) {
    this._title = v;
  }
  get price() {
    return this._price;
  }
  set price(v) {
    this._price = v;
  }
  get quantity() {
    return this._quantity;
  }
  set quantity(v) {
    this._quantity = v;
  }

  getProfit() {
    return this.price * this.quantity;
  }
  toString() {
    return (
      "Name- " +
      this.name +
      ", Title- " +
      this.title +
      ", Price- " +
      this.price +
      ", Quantity " +
      this.quantity
    );
  }
}
let b1 = new Book("JS", "Ani", "ani2002@gmail.com", "f", 30000, 10);

//Task 2
// Create an Account class. Account should have: id, name, balance.
// It should have setters for name and balance, and getters for all fields.
// It should have a method: credit(amount), which should add amount to balance and
// return the updated balance.
// It should have a method: debit(amount), which should subtract the amount from the
// balance, if amount is less than the balance, otherwise output “Amount exceeded
// balance.”
// It should have a method: transferTo(anotherAccount, amount): which should subtract the
// amount from the account balance and add it to the given anotherAccount and return the
// updated balance, if amount is less than the balance, otherwise output “Amount
// exceeded balance.”
// It should have a static method: identifyAccounts(accountFirst, accountSecond) which
// gets two accounts and identifies if they are the same or not comparing all fields.
// It should have toString method.

class Account {
  constructor(id, name, balance) {
    this.id = id;
    this.name = name;
    this.balance = balance;
  }
  get id() {
    return this._id;
  }
  get name() {
    return this._name;
  }
  get balance() {
    return this._balance;
  }
  set id(v) {
    this._id = v;
  }
  set name(v) {
    this._name = v;
  }
  set balance(v) {
    this._balance = v;
  }
  credit(amount) {
    return amount + this.balance;
  }
  debit(amount) {
    if (amount < this.balance) {
      return this.balance - amount;
    } else {
      return "Amount exceeded balance.";
    }
  }
  transferTo(anotherAccount, amount) {
    if (amount < this.balance) {
      this.balance - amount;
      return this.balance - amount + anotherAccount;
    } else {
      return "Amount exceeded balance.";
    }
  }
  static identifyAccounts(accountFirst, accountSecond) {
    if (accountFirst.id === accountSecond.id) {
      return "They are the same";
    }
    return "They are not the same";
  }
  toString() {
    return (
      "Id: " + this.id + ", name: " + this.name + ", balance: " + this.balance
    );
  }
}
let a1 = new Account(2, "one", 3000);
a1.credit(200);
a1.debit(2000);
a1.transferTo(300, 1000);
a1.toString();

//Task 3
// Write classes: Person, Student, Staff.
// Person should have: firstName, lastName, gender, age.
// It should have appropriate getters and setters.
// It should have a method: toString().
// Student is inherited from Person. It should have program(array of strings), year, fee.
// It should have appropriate getters and setters.
// It should have method: passExam(program, grade). Student should contain the data
// about its programs and exams. passExam will update that data, so if student passed all
// the exams(grade is great or equal to 50), its year should be increased by one.
// It should have a toString method.
// Teacher is inherited from Person. It should have program(string), pay.
// It should have appropriate getters and setters.
// It should have a toString method.

class Person {
  constructor(firstName, lastName, gender, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.age = age;
  }
  get firstName() {
    return this._firstName;
  }
  set firstName(v) {
    this._firstName = v;
  }
  get lastName() {
    return this._lastName;
  }
  set lastName(v) {
    this._lastName = v;
  }
  get gender() {
    return this._gender;
  }
  set gender(v) {
    this._gender = v;
  }
  get age() {
    return this._age;
  }
  set age(v) {
    this._age = v;
  }
  toString() {
    return (
      this.firstName + " " + this.lastName + " " + this.gender + " " + this.age
    );
  }
}

let p = new Person("Ani", "Tovmasyan", "f", 21);

class Student extends Person {
  constructor(firstName, lastName, gender, age, program, year, fee) {
    super(firstName, lastName, gender, age);
    this.program = program;
    this.year = year;
    this.fee = fee;
  }
  get program() {
    return this._program;
  }
  set program(v) {
    this._program = v;
  }
  get year() {
    return this._year;
  }
  set year(v) {
    this._year = v;
  }
  get fee() {
    return this._fee;
  }
  set fee(v) {
    this._fee = v;
  }
  passExam(program, grade) {
    if (grade >= 50) {
      return this.year + 1;
    }
  }
  toString() {
    return (
      "Program: " + this.program + ", year: " + this.year + ", fee: " + this.fee
    );
  }
}

let s1 = new Student("L", "K", "f", 15, ["g", "f"], 2023, 600);

class Teacher extends Person {
  constructor(firstName, lastName, gender, age, program, pay) {
    super(firstName, lastName, gender, age);
    this.program = program;
    this.pay = pay;
  }
  get pay() {
    return this._pay;
  }
  set pay(v) {
    this._pay = v;
  }
  get program() {
    return this._program;
  }
  set program(v) {
    this._program = v;
  }
  toString() {
    return this.program + " " + this.pay;
  }
}

let t1 = new Teacher("V", "D", "m", 50, "lll", 30000);
