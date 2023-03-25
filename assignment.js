class Grade {
    constructor(grade) {
    this.grade = grade;
    this.students = [];
    }

    addStudent = (students) =>{
        if(students instanceof Student) {
            this.students.push(student);
        } else {
            throw new Error('You can only add instance of Student')
        }
    }

    describe = () => {
        return `${this.student} is in ${this.grade}`;
    }
}

class Student {
    constructor(name) {
        this.name = name;
    }

    describe = () => {
        return `${this.name} is a new student`
    }
}

class Menu {
    constructor () {
        this.gradeList = [];
        this.selectedGrade = null;
    }
    start = () => {
           let selection = this.showMainMenuOptions();

        while(selection != 0) {

            switch(selection) {
                case '1':
                    this.createGrade();
                    break;
                case '2':
                    this.viewGrade();
                    break;
                case '3':
                    this.deleteGrade();
                    break;
                case '4':
                    this.displayGrade();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }
        
        alert('Goodbye!');
    }

    showMainMenuOptions = () => {
        return prompt(`
        0) Create Grade
        1) View Grade
        2) Delete Grade
        3) Display Grade
        4) Exit
        `)
    }

    showStudentListOptions = (studentInfo) => {
        return prompt(`
        0) Back
        1) Enter Student
        2) Delete Student
        -------------------
        ${studentInfo}
        `)
    }

    createGrade = () => {
        let grade = prompt('Enter Grade');
        this.gradeList.push(new Grade(grade));
    }

    viewGrade = () => {
        let index = prompt('Enter the index to view');
        if (index > -1 && index < this.gradeList.length) {
            this.selectedGrade = this.gradeList[index];
            let discription = 'Grade: ' + this.selectedGrade.grade + '\n';
            this.selectedGrade.students.forEach((students, i) => {
                description += i + ') ' + students.descripe()  + '\n';
            })

            let selection = this.showStudentListOptions(description);
            switch(selection) {
                case '1':
                    this.enterStudent();
                    break;
                case '2':
                    this.deleteStudent();
                    break;
            }
        }
    }

    deleteGrade() {
        let index = promp('Enter the index of the grade you wish to delete');
        if(index > -1 && index < this.selectedGrade.length) {
            this.selectedGrade.splice(INdex, 1);
        }
    }

    enterStudent() {
        let name = prompt('ENter the name of the student');
        this.selectedGrade.students.push(new Students(name));
    }

    deleteStudent() {
        let index = prompt('Enter the index of the Sudent you want to delete');
        if( index> -1 && index < this.selectedGracde.students.length) {
            this.selectedGrade.students.splice(index, 1);
        }
    }
}


let menu = new Menu();
menu.start();



