const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
};
  
const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
};

const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
};

const addKey = (obj, key, value) => obj[key] = value;

addKey(lesson2, 'Turno', 'Noite');

const listKeys = (obj) => Object.keys(obj)

const objectLength = (obj) => Object.keys(obj).length

const listValues = (obj) => Object.values(obj)

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3})

const totalOfStudents = () => {
    let total = 0;
    const array = Object.entries(allLessons)
    for(let lesson of array) {
        total += lesson[1].numeroEstudantes
    }
    return total;
}

const valueOfKey = (obj, num) => {
    const array = Object.keys(obj);
    return obj[array[num]]
}

const verifyPair = (obj, key, value) => {
    const array = Object.entries(obj)
    for(let pair of array) {
        if(pair[0] == key && pair[1] == value){
            return true;
        }
    }
    return false;
}

const totalOfStudentsThatAttendedToMath = () => {
    let total = 0;
    const array = Object.entries(allLessons)
    for(let lesson of array) {
        if(lesson[1].materia == 'Matemática'){
            total += lesson[1].numeroEstudantes
        }
    }
    return total;
}

const createReport = nome => {
    const report = {
        professor: nome,
        aulas: [],
        estudantes: 0
    }
    const array = Object.entries(allLessons)
    for(let lesson of array) {
        if(lesson[1].professor == nome){
            report.aulas.push(lesson[1].materia)
            report.estudantes += lesson[1].numeroEstudantes
        }
    }
    return report;
}

console.log(createReport('Maria Clara'))