
function a () {
	console.log(b);
	var b = 'bbb';
	console.log(b);
	function b() { }
	console.log(b);
}
a();

console.log('************');

function a () {
	var b; 
	function b() { } 

	console.log(b);
	b = 'bbb'; 

	console.log(b);
	console.log(b);
}
a();