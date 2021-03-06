function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

  //Ex1
  function createDaysOfTheMonth(){
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    let list = document.getElementById('days');
    for(let day of dezDaysList){
        let newDay = document.createElement('li')
        list.appendChild(newDay)
        newDay.classList += 'day'
        newDay.innerText = day;
        if(day == 24 || day == 25 || day == 31){
            newDay.classList += ' holiday'
        }
        if(day == 4 || day == 11 || day == 18 || day == 25){
            newDay.classList += ' friday'
        }
    }
  }

  createDaysOfTheMonth();

  //Ex2
  function createHolidayButton(string){
      let button = document.createElement('button');
      button.innerText = string
      button.id = 'btn-holiday'
      document.getElementsByClassName('buttons-container')[0].appendChild(button);  
  }

  createHolidayButton('Feriados');

  //Ex3
  function addHolidayEventListener(){
      let button = document.getElementById('btn-holiday')
      let status = false;
      button.addEventListener('click', function(){
          let list = document.getElementById('days').children
          if(!status){
            for(let day of list){
                if(day.classList.contains('holiday')){
                day.style.backgroundColor = "lightblue"
                }
            }
            status = true;
          }else{
            for(let day of list){
                if(day.classList.contains('holiday')){
                day.style.backgroundColor = "rgb(238,238,238)"
                }
            }
            status = false;
          }
          
      })
  }

  addHolidayEventListener();

  //Ex4
  function createFridayButton(string){
    let button = document.createElement('button');
    button.innerText = string
    button.id = 'btn-friday'
    document.getElementsByClassName('buttons-container')[0].appendChild(button);  
}

    createFridayButton('Sexta-feira');

  //Ex5
  function addFridayEventListener(){
    let button = document.getElementById('btn-friday')
    let status = false;
    button.addEventListener('click', function(){
        let list = document.getElementById('days').children
        if(!status){
          for(let day of list){
              if(day.classList.contains('friday')){
              day.style.backgroundColor = "lightblue"
              }
          }
          status = true;
        }else{
          for(let day of list){
              if(day.classList.contains('friday')){
              day.style.backgroundColor = "rgb(238,238,238)"
              }
          }
          status = false;
        }
        
    })
}

    addFridayEventListener();

    //Ex6
    function addMonthDaysListener(){
        let list = document.getElementById('days').children
        for(let day of list){
            day.addEventListener('mouseover', function(event){
                event.target.style.transition = '0.2s'
                event.target.style.fontSize = '25px'
            })
            day.addEventListener('mouseleave', function(event){
                event.target.style.transition = '0.2s'
                event.target.style.fontSize = '20px'
            })
        }
    }  
    
    addMonthDaysListener();

    //Ex7
    function addTask(string){
        let task = document.createElement('span')
        let container = document.getElementsByClassName('my-tasks')[0]
        task.innerText = string
        container.appendChild(task)
    }

    addTask('Cozinhar');

    //Ex8
    function addSubtitle(color){
        let sub = document.createElement('div')
        let container = document.getElementsByClassName('my-tasks')[0]
        sub.className = 'task'
        sub.style.backgroundColor = color
        container.appendChild(sub);
    }

    addSubtitle("pink");

    //Ex9
    function select(){
        let list = document.getElementsByClassName('my-tasks')[0].children
        for(let icon of list){
            if(icon.classList.contains('task')){
                icon.addEventListener("click", function(event){
                  if(icon.classList.contains('selected')){
                    icon.classList.remove('selected')
                  }else{
                    event.target.className = "task selected"
                  }
                }

            )}
        }
    }

    select();

    //Ex10
    function colorDay(){
        let list = document.getElementById('days').children
        for(let day of list){
            day.addEventListener('click', function(event){
                let selected = document.getElementsByClassName('selected')[0]
                let chosenColor = selected.style.backgroundColor
                if(!event.target.classList.contains('colored')){
                    event.target.style.color = chosenColor
                    event.target.classList += ' colored'
                }else{
                    event.target.style.color = "rgb(119,119,119)"
                    event.target.classList.remove('colored')
                }
            })
        }
    }

    colorDay();

    //Ex Bônus

    function addAppointment(){
        let input = document.getElementById('task-input')
        let button = document.getElementById('btn-add')
        let container = document.getElementsByClassName('task-list')[0]

        button.addEventListener('click', function(event){
            let newAppointment = document.createElement('div')
            if(input.value == ""){
                alert('O compromisso deve conter um nome')
            }else{
                newAppointment.innerText = input.value
                container.appendChild(newAppointment)
                input.value = null;
            }
        })
    }

    function onEnter(event){
        let container = document.getElementsByClassName('task-list')[0]
        let input = document.getElementById('task-input')
        if(event.key == "Enter"){
           let newAppointment = document.createElement('div')
           if(input.value == ""){
               alert('O compromisso deve conter um nome')
           }else{
               newAppointment.innerText = input.value
               container.appendChild(newAppointment)
               input.value = null;
           }
        }
   } 

    addAppointment()