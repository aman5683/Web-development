(function(window){
	var speakhello={};
	var say="Hello ";
	speakhello.sayhello=function(name){
		console.log(say+name);
	}
	window.speakhello=speakhello;
})(window);

