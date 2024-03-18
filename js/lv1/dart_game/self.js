function solution(dartResult) {
	var answer = 0;
	var points = dartResult.match(/\d+[A-Z]{1}[\#\*]?/g);
	var pos = [];
	points.map((point, index) => {
		var tp = calSquare(point);
		point.includes('#') ? pos[index]=-tp : pos[index]=tp
		if(point.includes('*')) {
			pos[index] = pos[index]*2;
			pos[index-1] ? pos[index-1] = pos[index-1]*2 : null;
		}
	})
	pos.forEach(score => answer += score)
    return answer;
}

const calSquare = (str) => {
	var num = str.match(/\d+/g)[0];
	var square = str.match(/[A-Z]{1}/g)[0];
	if(square === 'S'){
		return Math.pow(num, 1);
	} else if(square === 'D'){
		return Math.pow(num, 2);
	} else if(square === 'T'){
		return Math.pow(num, 3);
	}
}
