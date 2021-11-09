function calculator(numbers) {
    function sum() {
      let sumTotal = 0;
      for (num of numbers) sumTotal += num;
      return sumTotal;
    }
  
    function sub() {
      let subTotal = numbers[0];
      for (num of numbers) subTotal -= num;
      return subTotal + numbers[0];
    }

    function mol() {
        let molTotal = numbers[0];
        for (num of numbers) molTotal *= num;
        return molTotal;
    }

    function div() {
        let divTotal = 0;
        for (num of numbers) divTotal /= num;
        return divTotal;
    }


  
    return {
      sum: sum(),
      sub: sub(),
      mol: mol(),
      div: div(),
    };
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function calculator(numbers) {
    const sum = () => numbers.reduce((acc, num) => acc + num);
    const sub = () => numbers.reduce((acc, num) => acc - num);
    const mol = () => numbers.reduce((acc, num) => acc * num);
    const div = () => numbers.reduce((acc, num) => acc / num);
    
    return {
    sum: sum(),
    sub: sub(),
    mol: mol(),
    div: div(),
           }
  };
  
  calculator([1, 3, 5, 7]);

  
 
  
  