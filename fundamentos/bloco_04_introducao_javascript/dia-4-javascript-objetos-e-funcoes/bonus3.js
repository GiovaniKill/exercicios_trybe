const basket = [
    'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
    'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
    'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
    'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
    'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
    'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
    'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
    'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
    'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
    'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
    'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
    'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
    'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
    'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
    'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
    'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
    'Banana', 'Pera', 'Abacate', 'Uva',
  ];

  function counter(array){
      let quantities = {}
      
      //Aqui, eu verifico se já existe uma key com o nome daquela fruta no objeto, atribuindo a um array que sabe quais já existem, se ela não existe, eu adiciono
      let existentKeys = []
      for(let fruit of array){
          let repetitionCheck = false;
          for(let key of existentKeys){
              if(key == fruit){
                  repetitionCheck = true;
                  break;
              }
          }
          if(!repetitionCheck){
            quantities[fruit] = 0
            quantities[fruit] += 1
            existentKeys.push(fruit)
          }else{
            quantities[fruit] += 1
          }
      }

      return quantities;
  }

  let quantities = counter(basket);

  console.log("Sua cesta possui: " + quantities["Melancia"] + " Melancias, " + quantities["Abacate"] + " Abacates, " + quantities["Uva"] + " Uvas, " + quantities["Laranja"] + " Laranjas, " + quantities["Jaca"] + " Jacas, ", quantities["Pera"] + " Peras e " + quantities["Banana"] + " Bananas.")

  