function solution(N, stages) {
    var answer = []
    let failPerInfo = []

    for (var i=1; i <= N; i++) {
        var reachedCount = stages.filter(num => num >= i).length
        var currentCount = stages.filter(num => num === i).length
        var failPer = currentCount / reachedCount
        console.log('실패율:', failPer)
        
        failPerInfo.push({
            'stage' : i,
            'failPer' : failPer,
        })
    }

    failPerInfo.sort((a,b) => {
        if(a.failPer !== b.failPer){
            return b.failPer - a.failPer
        }
        return a.stage - b.stage
    })

    failPerInfo.forEach(a => {
        answer.push(a.stage)
    })

    return answer
}
