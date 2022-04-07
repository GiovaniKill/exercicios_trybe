const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const returnResults = (template, answers, func) => console.log(func(template, answers));


const verifyAnswers = (template, answers) => {
    let total = 0;
    for(let index = 0; index < template.length; index+=1) {
        if (!(answers[index] === 'N.A')) {
            template[index] === answers[index] ? total+=1 : total-=0.5;
        }
    }
    return total;
}

returnResults(RIGHT_ANSWERS, STUDENT_ANSWERS, verifyAnswers);