var obj1 = {
	outer: function() {
		console.log('첫번째',this); // (1)
		var innerFunc = function() {
			console.log('두번째',this); // (2), (3)
		}
		innerFunc();

		var obj2 = {
			innerMethod: innerFunc
		};
		obj2.innerMethod();
	}
};
obj1.outer();


