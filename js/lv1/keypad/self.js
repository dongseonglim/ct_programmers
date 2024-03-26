function solution(numbers, hand) {
    var answer = '';

    const leftNums = [1, 4, 7]
    const rightNums = [3, 6, 9]

    let hover = ['*', '#']

    numbers.forEach(num => {
        if (leftNums.includes(num)){
            answer = answer.concat('L')
            hover[0] = num
        } else if (rightNums.includes(num)){
            answer = answer.concat('R')
            hover[1] = num
        } else {
            var movedHand = get_hand(num, hover[0], hover[1], hand)
            answer = answer.concat(movedHand)
            movedHand === 'L' ? hover[0] = num : hover[1] = num
        }
    })

    return answer;
}

const get_hand = (click, left, right, hand) => {
    const pad = [[1, 2, 3], [4, 5, 6], [7, 8, 9], ['*', 0, '#']]
    let click_ij = []
    let left_ij = []
    let right_ij = []
    pad.forEach((line, i) => {
        line.forEach((num, j) => {
            num === click ? click_ij = [i, j] : null
            num === left ? left_ij = [i, j] : null
            num === right ? right_ij = [i, j] : null
        })
    })
    var distanceArray = [0,0]
    distanceArray[0] = Math.abs(click_ij[0]-left_ij[0]) + Math.abs(click_ij[1]-left_ij[1])
    distanceArray[1] = Math.abs(click_ij[0]-right_ij[0]) + Math.abs(click_ij[1]-right_ij[1])
    if (distanceArray[0] === distanceArray[1]) {
        return hand === "left" ? "L" : "R"
    }
    return distanceArray[0] > distanceArray[1] ? "R" : "L"
}
