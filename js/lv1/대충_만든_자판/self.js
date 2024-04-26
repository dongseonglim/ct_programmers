function solution(keymap, targets) {
    var answer = []
    let minTouch = {}
    keymap.forEach(el => {
        el.split('').forEach((v, i) => {
            if(minTouch[v]){
                minTouch[v] > i+1 ? minTouch[v] = i+1 : null
            } else {
                minTouch[v] = i+1
            }
        })
    })

    targets.forEach(el => {
        let count = 0
        for(let i = 0; i < el.length; i++) {
            if(minTouch[el[i]]){
                count += minTouch[el[i]]
            } else {
                count = -1
                break
            }
        }

        count === 0 ? answer.push(-1) : answer.push(count)
    })

    return answer
}
