function solution(X, Y) {
    var answer = ''
    let Xob = {}
    let Yob = {}

    for (let i=0; i<X.length; i++) {
        Xob[X[i]] ? Xob[X[i]]++ : Xob[X[i]] = 1
    }
    for (let i=0; i<Y.length; i++) {
        Yob[Y[i]] ? Yob[Y[i]]++ : Yob[Y[i]] = 1
    }
    // console.log(Xob, Yob)
    for (let i=9; i>=0; i--) {
        if(Xob[i] && Yob[i]){
            if(Xob[i] >= Yob[i]){
                for(let j=0; j<Yob[i]; j++){
                    answer += String(i)
                }
            } else {
                for(let j=0; j<Xob[i]; j++){
                    answer += String(i)
                }
                
            }
        }
    }
    while (answer[0] == '0' && answer.length != 1) {
        answer = answer.replace('0', '')
    }
    return answer ? answer : '-1'
}
