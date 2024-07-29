//complete this code
class Rectangle {
	constructor(width,height)
	{
		this.width=width
		this.height=height
	}
	get Width()
	{
		return this.width
	}
	get Height()
	{
		return this.height
	}
	getArea()
	{
		return this.width*this.height
	}
	
}

class Square extends Rectangle {
	constructor(side)
	{
		super(side, side);
		this.side=side
	}
	// this has to be inside a function: return super.getAre();
	getArea()
	{
		return super.getArea()
	}
	getPerimeter()
	{
		return 4*this.side
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
