var main = {
 init: function() {
	msg = main.msg;
	msgscr = document.getElementById('msgscreen');
	msgscr.style.font = '16px "Comic Sans MS"';
	main.drawsth();
 },

 msg: function(mymsg) {
	let para = document.createElement('p');
	let text = document.createTextNode(mymsg);
	para.appendChild(text);
	msgscr.appendChild(para);
 },

 drawsth: function() {
	msg("Hi, everybody.");
	let canvas = document.createElement('canvas');
	canvas.width = 200;
	canvas.height = 200;
	msgscr.appendChild(canvas);
	let ctx = canvas.getContext('2d');
	ctx.strokeRect(0,0,200,200);
	ctx.beginPath();
	ctx.arc(70,50,12,0,2*Math.PI,false);
	ctx.moveTo(143,50);
	ctx.arc(130,50,12,0,2*Math.PI,false);
	ctx.moveTo(55,133);
	ctx.arc(100,110,50,0.15*Math.PI,0.85*Math.PI,false);
	ctx.stroke();
 },
};

window.addEventListener('load',function(){main.init();},false)