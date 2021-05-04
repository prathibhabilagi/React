//Initalize static and public variable
class Gangsta {
    static totalBullets = 100;
    totalPeople = 40; 

    shoot() {
        Gangsta.totalBullets --;
        this.totalPeople --;
        console.log(`Bullets left ${Gangsta.totalBullets} and people still alive ${this.totalPeople}`);
        
    }
}


//Create a new instance of the Gangsta
const g1 = new Gangsta();
g1.shoot();

const g2 = new Gangsta();
g2.shoot();

