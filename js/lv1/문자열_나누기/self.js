function solution(s) {
    let answer = 0
    while(s.length !== 0){
        const first = s[0]
        let fCount = 0
        let oCount = 0
        for(let i=0; i<s.length; i++){
            if(s[i] === first) {
                fCount++
            } else {
                oCount++
            }
            if(fCount === oCount) {
                s = s.substring(i+1)
                answer++
                break
            } else if(i === s.length - 1){
                s = ''
                answer++
                break
            }
        }
    }
    return answer
}
