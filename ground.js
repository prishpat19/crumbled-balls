class ground
{
	constructor(x,y,width,height)
	{
		var options={
			isStatic:true,
			'restitution':0,
			'friction': 0,
			'density': 1			
			}
			this.body=Bodies.rectangle(x, y, width, height, options);	
		this.width = width;
		this.height= height;
		
 		World.add(world, this.body);

	}
	display()
	{
			
			var groundPos = this.body.position;
			push();
			translate(groundPos.x, groundPos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(255)
			rect(0, 0,this.width, this.height);
			pop();
			
	}

};