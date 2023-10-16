var obj1 = {
	outer: function() {
		console.log("first" + this); // (1) outer

		// AS-IS
		var innerFunc1 = function() {
			console.log("second" + this); // (2) 전역객체
		}
		innerFunc1();

		// TO-BE
		var self = this;
		var innerFunc2 = function() {
      console.log("third" + this);
			console.log(self); // (3) outer
		};
		innerFunc2();
	}
};

// 메서드 호출 부분
obj1.outer();