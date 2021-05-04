class Labour {
    public fname = '';
    public lname = '';
    private age = 0;

    protected sayHello(): string {
        return `My name is ${this.fname} ${this.lname}`
    }
}

class EachLabour extends Labour {
    department = ''

    reviewPerformance(): void {
        this.sayHello();
        this.increasePay(5);
    }

    increasePay(percent: number): void {
        this.reviewPerformance();
    }
}


//using constructor 
class BTS {
    constructor(
        public name = '',
        public occupation = '',
        private dob = 0,
        protected army = ''
    ) {};
}

const member = new BTS('Tae', 'Vocal', 26, 'IPU');
console.log(`${member.name} ${member.occupation} `);
//console.log(`${member.dob} ${member.army}`); // dob and army cannot be accessed because it's private
