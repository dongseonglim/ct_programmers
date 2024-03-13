function solution(n, arr1, arr2) {
    var answer = [];

	const map1 = arr1.map(arr => {
		return Array.from(arr.toString(2).padStart(n,'0'));
	})
	console.log(map1);

	const map2 = arr2.map(arr => {
		return Array.from(arr.toString(2).padStart(n,'0'));
	})
	console.log(map2);
	
    for (var i=0; i<n; i++) {
        let temp = '';
        for (var j=0; j<n; j++) {
            // console.log(map1[i][j], map2[i][j])
            if(map1[i][j] ==='1'|| map2[i][j] === '1'){
                temp = temp.concat('#');
            } else{
                temp = temp.concat(' ');
            }
        }
        answer.push(temp);
        temp = '';
    }
    
    return answer;
}
