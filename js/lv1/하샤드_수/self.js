function solution(x) {
    var answer = true
    const str = String(x)
    let sum = 0
    for (var i = 0; i < str.length; i++) {
        sum += Number(str[i])
    }
  
    if (x % sum != 0) {
        answer = false
    }
    return answer
}
