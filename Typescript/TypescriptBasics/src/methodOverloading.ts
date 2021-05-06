//Declare a class ProductService

class ProductService {
// getProducts() method without argumnets
    // getProducts(): void {
    //     console.log('Getting all products');
    // } 
// getProducts() method with one argumnets
    // getProducts(id: number): void {
    //     console.log(`Getting product info of ${id}`);
    // }


//<-------- Correct Syntax of method overloading -------------->

// Declares the allowed method singature
    getProducts(): void;
    getProducts(id: number): void;

//Implements the method
    getProducts(id ?: number){
        if (typeof id === 'number'){
            console.log(`Getting product info of ${id}`);
        } else {
            console.log(`Getting all products`);    
        } 
    }
}

const prodService = new ProductService();

prodService.getProducts(123);
prodService.getProducts();


//Overloading constructors
class Product {
    id: number;
    description: string;

    //no-arg constructor declaration
    constructor();

    //one-arg constructor declaration
    constructor(id: number);

    //two-arg constructor declaration
    constructor(id: number, description: string);

    //implementation of constructor handling all possible arguments
    constructor(id?: number, description?: string) {
        console.log(`${id}`);
    }
}
