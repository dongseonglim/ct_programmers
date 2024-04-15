function solution(friends, gifts) {
    let giftIndex = {}
    let takeIndex = {}
    friends.forEach(el => {
        giftIndex[el] = 0
        takeIndex[el] = 0
    })
    gifts.forEach(el => {
        const [give, take] = el.split(' ')
        giftIndex[give] += 1
        giftIndex[take] -= 1
    })
    
    friends.forEach((el, i) => {
        let myName = el
        let frName
        for (let j=0; j<friends.length; j++) {
            if(i !== j){
                frName = friends[j]
                let giveCnt = gifts.filter(v => v == myName + " " + frName).length
                let takeCnt = gifts.filter(v => v == frName + " " + myName).length
                if(giveCnt > takeCnt) {
                    takeIndex[myName] += 1
                } else if(giveCnt == takeCnt){
                    if(giftIndex[myName] > giftIndex[frName]){
                        takeIndex[myName] += 1
                    }
                }
            }
        }
    })
    
    let temp = []
    for(let el in takeIndex){
        temp.push(takeIndex[el])
    }
    return max = Math.max(...temp)
}
