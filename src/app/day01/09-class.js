class Emp{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    work(){
        return `${this.name} is working`
    }
}
var yycf  = new Emp('yanyunchangfeng',18000);
console.log(yycf.work())
class Programmer extends Emp{
    constructor(name,age,skill){
        super(name,age);
        this.skill = skill;
    }
    work(){
        return super.work()+` skill is ${this.skill}`
    }
}
var pyycf = new Programmer('yanyunchangfeng',26,'frontend');
console.log(pyycf.name)
console.log(pyycf.work())