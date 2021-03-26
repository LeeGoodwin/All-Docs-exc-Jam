const getSleepHours = day => {
    if (day === 'monday') {
      return 8;
    } else if (day === 'tuesday'){
      return 10;
    } else if (day === 'wednesday'){
      return 8;
    } else if (day === 'thursday'){
      return 7;
    } else if (day === 'friday'){
      return 4;
    } else if (day === 'saturday'){
      return 8;
    } else if (day === 'sunday'){
      return 5;
    };
  
  };
  
  const getActualSleepHours = () => (
    getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday')
  );
  
  const getIdealSleepHours = () => {
    idealHours = 8;
    return(idealHours * 7);
  };
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const IdealSleepHours = getIdealSleepHours();
  
    if (actualSleepHours === IdealSleepHours) {
      console.log(`You got the perfect amount of sleep! You slept for ${IdealSleepHours} hours!`);
    } else if (actualSleepHours > IdealSleepHours){
      console.log(`You were ${actualSleepHours - IdealSleepHours} hours over your sleep target. Well done!`)
    } else if (actualSleepHours < IdealSleepHours){
      console.log(`You were ${IdealSleepHours - actualSleepHours} hours short of your ideal sleep hours. You need to get more rest....`);
    };
  };
  
  calculateSleepDebt();
  
  
  
  
  
  
  
  
  
  
  
  
  