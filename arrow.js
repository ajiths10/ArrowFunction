var multiple = (a ) => a*2;
console.log(multiple(3))
var arr = (...n) => {

    for(var i=0;i<n.length;i++){
        console.log(n[i]);
    }
    
};
arr(1,2,3);


class ClassRoom{
    static count=0;

    constructor(username,userage,usernumber,mark){
    this.name=username,
    this.age=userage,
    this.phnumber=usernumber,
    this.boardmark=mark
    ClassRoom.countStudent();
}
 checkmark(){
    if(this.boardmark>40){
        console.log(`${this.name} is eligible with ${this.boardmark}% of mark`);
    }else{
        console.log(`${this.name} is not eligible with ${this.boardmark}% of mark. Minimum mark is 40%`);
    }
}

static countStudent(){
    return ( ClassRoom.count++);  
}



}

const user1= new ClassRoom('Tom','21','998547568541','82');
const user2= new ClassRoom('kyle','22','9947521436','79');
const user3= new ClassRoom('john','24','9952146589','39');
const user4= new ClassRoom('jessy','23','8589745523','41');
const user5= new ClassRoom('rick','21','9952152256','35');

console.log(`Total Number of students = ${ClassRoom.countStudent()}`);

user1.checkmark();
user2.checkmark();
user3.checkmark();
user4.checkmark();
user5.checkmark();

let a =2

let eligible = (usermark,userage) => {
    if (usermark>40 && userage >=22){
        return true;
    }
    else{
        return false;
    }
  }

console.log(`${user1.name} = ${eligible(user1.boardmark,user1.age)}`);
console.log(`${user2.name} = ${eligible(user2.boardmark,user2.age)}`);
console.log(`${user3.name} = ${eligible(user3.boardmark,user3.age)}`);
console.log(`${user4.name} = ${eligible(user4.boardmark,user4.age)}`);
console.log(`${user5.name} = ${eligible(user5.boardmark,user5.age)}`);

console.log(` `);
console.log(`Selected students`);

if(user1.boardmark,user1.age) console.log(`${user1.name}`);
if(user2.boardmark,user2.age) console.log(`${user2.name}`);
if(user3.boardmark,user3.age) console.log(`${user3.name}`);
if(user4.boardmark,user4.age) console.log(`${user4.name}`);
if(user5.boardmark,user5.age) console.log(`${user5.name}`);