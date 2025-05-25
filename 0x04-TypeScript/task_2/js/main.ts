interface Director {
  workDirectorTasks(): string;
}

interface Teacher {
  workTeacherTasks(): string;
}

function isDirector(employee: Director | Teacher): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}


function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
    return {
      workTeacherTasks: () => "Getting to work",
    } as Teacher;
  } else {
    return {
      workDirectorTasks: () => "Getting to director tasks",
    } as Director;
  }
}


console.log(executeWork(createEmployee(200))); 
console.log(executeWork(createEmployee(1000))); 





type Subjects = "Math" | "History";
function teachClass(todayClass: Subjects): string {
  if (todayClass === "Math") {
    return "Teaching Math";
  } else {
    return "Teaching History";
  }
}


console.log(teachClass("Math"));     
console.log(teachClass("History"));  
