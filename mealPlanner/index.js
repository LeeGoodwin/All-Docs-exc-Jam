const menu = {
    _courses: {
      appetizers: [],
      mains: [],
      desserts: [],
    },
    get appetizers() {
      return this._courses.appetizers;
    },
    get mains() {
      return this._courses.mains;
    },
    get deserts() {
      return this._courses.desserts;
    },
    set appetizers(appetizers) {
      this._courses.appetizers = appetizers;
    },
    set mains(mains) {
      this._courses.mains = mains;
    },
    set desserts(desserts) {
      this._courses.desserts = desserts;
    },
    get courses() {
      return {
        appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts,
      };
    },
   addDishToCourse(courseName, dishName, dishPrice) {
     const dish = {
       name: dishName,
       price: dishPrice,
     };
     return this._courses[courseName].push(dish);
   },
   getRandomDishFromCourse(courseName) {
     const dishes = this._courses[courseName];
     const randomIndex = Math.floor(Math.random() * dishes.length);
     return dishes[randomIndex];
   },
   generateRandomMeal() {
     const appetizer = this.getRandomDishFromCourse('appetizers');
     const main = this.getRandomDishFromCourse('mains');
     const dessert = this.getRandomDishFromCourse('desserts');
     const totalPrice = appetizer.price + main.price + dessert.price;
     return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name} and will cost a total of ${totalPrice}`;
    } 
  };
  
  menu.addDishToCourse('appetizers', 'salad', 4.00);
  menu.addDishToCourse('appetizers', 'wings', 5.00);
  menu.addDishToCourse('appetizers', 'fries', 4.50);
  menu.addDishToCourse('appetizers', 'fish cakes', 4.20);
  menu.addDishToCourse('appetizers', 'muffins', 5.05);
  menu.addDishToCourse('appetizers', 'soup', 4.55);
  menu.addDishToCourse('appetizers', 'ribs', 7.80);
  menu.addDishToCourse('appetizers', 'calamari', 5.49);
  menu.addDishToCourse('appetizers', 'trout', 4.51);
  
  
  menu.addDishToCourse('mains', 'steak', 10.25);
  menu.addDishToCourse('mains', 'salmon', 7.75);
  menu.addDishToCourse('mains', 'salad', 11.20);
  menu.addDishToCourse('mains', 'rib eye', 100.25);
  menu.addDishToCourse('mains', 'mac and cheese', 8.75);
  menu.addDishToCourse('mains', 'goose', 15.20);
  
  menu.addDishToCourse('desserts', 'ice cream', 3.00);
  menu.addDishToCourse('desserts', 'coffee', 3.00);
  menu.addDishToCourse('desserts', 'cake', 3.25);
  menu.addDishToCourse('desserts', 'roly poly', 4.00);
  menu.addDishToCourse('desserts', 'sticky toffee pub', 3.40);
  menu.addDishToCourse('desserts', 'Jelly', 3.27);
  
  const meal = menu.generateRandomMeal();
  console.log(meal);
  
  
  
  
  
  
  
  
  
  
  