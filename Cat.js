function Cat() {
	this.stomatch = [];
}

Cat.prototype.eat = function(mouse) {
	this.stomatch.push(mouse);
	mouse.dead = true;
}

module.exports = Cat;