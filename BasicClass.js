class BasicClass {
    constructor(fname, lname) {
        this.firstname = fname;
        this.lastname = lname;
    }
    fullName() {
        return  `Your name is ${this.firstname} ${this.lastname}`;
    }
    static EnrollStudents() {
        return "Enrolling students";
    }
}

let nameObj = new BasicClass("Kalpit", "Tandon");
console.log(nameObj.firstname)
console.log(nameObj.fullName())
BasicClass.EnrollStudents(); //Static method