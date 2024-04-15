function solution(n, lost, reserve) {
    var answer = 0;
    for(let i=1; i<=n; i++) {
        if(lost.includes(i)){
            // console.log("체육복 도난!")
            if(reserve.includes(i)){
                reserve = reserve.filter(v => v !== i)
                answer += 1
            }else if(reserve.includes(i-1) && !lost.includes(i-1)){
                reserve = reserve.filter(v => v !== i-1)
                answer += 1
            } else if(reserve.includes(i+1) && !lost.includes(i+1)){
                reserve = reserve.filter(v => v !== i+1)
                answer += 1
            }
        } else{
            answer += 1
        }
    }
    // console.log('여분:', reserve)

    return answer;
}
