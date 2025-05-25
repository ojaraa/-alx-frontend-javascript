interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; 
}

const teacher3: Teacher = {
  firstName: 'Ayomide',
  fullTimeEmployee: false,
  lastName: 'Sunday',
  location: 'Osun',
  contract: true,
};

console.log(teacher3);

interface Directors extends Teacher {
  numberOfReports: number;
}


const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);


interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}


const printTeacher: printTeacherFunction = (firstName, lastName): string => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

console.log(printTeacher("Williams", "Agbunu")); 

interface StudentClassConstructor {
  firstName: string;
  lastName: string;
}


interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}



class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor({ firstName, lastName }: StudentClassConstructor) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}


const student = new StudentClass({ firstName: "Blessing", lastName: "Okey" });

console.log(student.displayName());  
console.log(student.workOnHomework());  
