var main = {
 init: function() {
	msg = main.msg;
	msgscr = document.getElementById('msgscreen');
	msgscr.style.font = '16px "Comic Sans MS"';
	main.sayHi();
 },

 msg: function(mymsg) {
	let para = document.createElement('p');
	let text = document.createTextNode(mymsg);
	para.appendChild(text);
	msgscr.appendChild(para);
 },

 sayHi: function() {
	msg("Hi, everybody.");
 },
};

window.addEventListener('load',function(){main.init();},false)