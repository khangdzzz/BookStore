function Cat(name){
    this.name = name;
    this.stomach = [];
}

Cat.prototype.eat = function(){
    this.stomach.push('mouse1');
}

function Mouse(){
    this.dead = true;
}


function Dog(){

}
