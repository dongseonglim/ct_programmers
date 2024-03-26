function solution(lottos, win_nums) {
    var answer = [0, 0]
    const tables = [[6, 1], [5, 2], [4, 3], [3, 4], [2, 5]]

    let winCount = 0
    let zeroCount = 0
    lottos.forEach((a) => {
        a ? win_nums.includes(a) ? winCount++ : null : zeroCount++
    })
    tables.forEach((table) => {
        table[0]===winCount+zeroCount ? answer[0]=table[1] : winCount+zeroCount < 2 ? answer[0]=6 : null
        table[0]===winCount ? answer[1]=table[1] : winCount < 2 ? answer[1]=6 : null
    })
    return answer;
}
