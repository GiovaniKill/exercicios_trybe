const newEmployees = (func) => {
    const employees = {
      id1: func('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: func('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: func('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };

// Achei a função replace em https://stackoverflow.com/questions/5963182/how-to-remove-spaces-from-a-string-using-javascript
const employeeInfo = string => ({nomeCompleto: string, email: `${(string.replace(' ', '')).toLowerCase()}@trybe.com`});

console.log(newEmployees(employeeInfo));