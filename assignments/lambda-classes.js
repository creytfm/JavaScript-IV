// CODE here for your Lambda Classes
class Person {
    constructor(attrs) {
        this.newName = attrs.name,
        this.newAge = attrs.age,
        this.newLocation = attrs.location
    }
    speak() {
        return `Hello my name is ${this.newName} I am from ${this.newLocation}`
    }
}

class Instructor extends Person {
    constructor(attrs) {
        super(attrs)
        this.newSpecialty = attrs.specialty,
        this.newFavLanguage = attrs.favLanguage,
        this.newCatchPhrase = attrs.CatchPhrase
    }
    demo(subject) {
        return `Today we are learning about ${subject}`
    }
    grade(name, subject) {
        return `${name} recieves a perfect score on ${subject}`
    }
}

class Student extends Instructor {
    constructor(attrs) {
        super(attrs)
        this.newPreviousBackground = attrs.previousBackground,
        this.newClassName = attrs.className,
        this.newFavSubjects = attrs.favSubjects
    }
    listsSubjects(){
       return `${this.newName}'s favorites subjects are ${this.newFavSubjects}`
    }
    PRAssingment(name, newSubject) {
       return `${name} has submitted a PR for ${newSubject}`

    }
    sprintChallenge(name, subject) {
       return `${name} has begun sprint challenge on ${subject}`
    }
}

class ProjectManagers extends Instructor {
    constructor(projectManagersAttrs) {
        super(projectManagersAttrs)
        this.newGradClassName = projectManagersAttrs.gradClassName,
        this.newFavInstructor = projectManagersAttrs.favInstuctor
    }
    standUp( name, channel) {
      return  `${name} announces to ${channel}, @channel standy times!​​​​​`
    }
    debugsCode(name, student, subject) {
       return `${name} debugs ${student}'s code in ${subject}`
    }
}

const person = new Person({
    name: 'Tommy',
    age: '43',
    location: 'USA',

})

const instructor = new Instructor({
    name: 'Ana',
    age: '22',
    location: 'USA',
    specialty: 'Womens Studies',
    favLanguage: 'Farsi',
    catchPhrase: 'I am so cool'
})

const student = new Student({
    name: 'George',
    age: '75',
    location: 'USA',
    specialty: 'Social Studies',
    favLanguage: 'Russian',
    favSubjects:[
     "math",
     "geometry",
     "gym"],
    catchPhrase: 'Here comes the boom'


})

const projectManager = new ProjectManagers({
    name: 'Jenny',
    age: '29',
    location: 'USA',
    specialty: 'Ballet',
    favLanguage: 'English',
    catchPhrase: 'It is what it is',
    gradClassName: 'Class of 2015',
    favInstuctor: 'Mrs.Roses'

})

console.log(person.speak());
console.log(instructor.demo("Farsi"));
console.log(instructor.grade("Anna","English"));
console.log(student.listsSubjects());
console.log(student.PRAssingment("Guy","Geometry"));
console.log(student.sprintChallenge("Johnny", "Java"));
console.log(projectManager.standUp("Jenny", "WBBW"));
console.log(projectManager.debugsCode("Chris","Ron","Python"));