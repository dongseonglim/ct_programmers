function solution(s) {
    var answer = ''
    let numList = s.split(' ').map(Number).sort((a, b) => a - b)
    return answer.concat(numList[0]).concat(" ").concat(numList[numList.length - 1])
}
