//importd the assert module (node.js library)
const assert = require('assert');
//importd the target file to test against
const Rooster = require('../index.js')
//describe block and it
describe('Rooster', () => {
  //can have nexted describe block within
  describe('announceDawn', () => {
    // it block to test the required method
    it('returns a rooster call', () => {
      //write test using four phases (setup, excerise,verify&teardown)
      //SETUP - Define expected output
      const expected = 'cockadoodoodledo!';
      //EXCERISE - Call tested method and store result in varible
      const actual = Rooster.announceDawn();
      //Varify - Use an asert method to compare the actual and expected result
      assert.equal(actual, expected);
     /*can use .ok, .equal, .deepEqual etc etc see assert docs docs*/
     
    });
  });

  describe('timeAtDawn', () => {
    it('returns its argument as a string', () => {
      //SETUP
      const inputNumber = 12;
      const expected = '12';
      
      //EXCERISE
      const actual = Rooster.timeAtDawn(inputNumber);

      //VERIFY
      assert.equal(actual, expected);
    });

    it('throws error if argument is less than 00:00', () => {
      //SETUP
      const inputNumber = -1;
      const expected = RangeError;
      // Uses the throw error within index.js code block, as this exists we are checking to see it has thrown that not varifying here. 
      
      //VARIFY - includes assertation see above.
      assert.throws(() => {
        Rooster.timeAtDawn(inputNumber); 
      }, expected);
      });

    it('throws error if argument is greater than 23', () => {
      //same logic as above it 
      const inputNumber = 24;
      const expected = RangeError;

      assert.throws(() => {
      Rooster.timeAtDawn(inputNumber);}, expected);
      });  
    });
  });
