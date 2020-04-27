(function(window){
	var speakgoodbye={};
	var say="Good Bye ";
	speakgoodbye.saygoodbye=function(name){
		console.log(say+name);
	}
	window.speakgoodbye=speakgoodbye;
})(window);

