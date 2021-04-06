//<----------------- Type Alias --------------->
// Allow to create new name for an existing type
 
  
//Example => 
  
type alphanumeric  = string | number;
  
var input: alphanumeric;
input = 100;
input = "tae";
//input = true;  -> compile time error
console.log(input);
  
//Using Interface => 
  
type ID = string;

interface Employee {
  id: ID;
  name: string;
  surName: string;
}

