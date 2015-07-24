function range(start,end,step) {
    var numbers = [];
  if (end > start) {
        if (! step) {
              var step = 1;
        }

        for (var i = start; i <= end; i+= step ) {
              var num = i;
              numbers.push(num);
        }
      } else {
		if (! step) {
              var step = -1;
        }
        for (var i = start; i >= end; i+= step ) {
              var num = i;
              numbers.push(num);
        }
		}
  return numbers;
}


console.log(range(1,100,7))
