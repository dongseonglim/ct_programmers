function solution(s, skip, index) {
	var alphabets = 'abcdefghijklmnopqrstuvwxyz';
	var answer = '';
	for (var i of skip) {
		alphabets = alphabets.replace(i, "")
	}
	const totalCount = alphabets.length;

	for (var i of s) {
		var tempIndex = alphabets.indexOf(i);
		var postIndex = tempIndex + index
		
		while (postIndex >= totalCount) {
			postIndex = postIndex - totalCount
		}
		var add = alphabets[postIndex];
		answer = answer.concat(add);
	}
	
	return answer;
}
