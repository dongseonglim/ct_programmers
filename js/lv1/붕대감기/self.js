function solution(bandage, health, attacks) {
    var answer = health

    let preTime = 0
    for (let j=0; j<attacks.length; j++) {
        const [attackTime, damage] = [...attacks[j]]

        let gap = attackTime - preTime
        let continuity = 0
        for (let i=1; i<=gap; i++) {
            if(i != gap){
                // console.log('회복~')
                continuity++
                if(continuity % bandage[0] == 0){
                    // 추가회복
                    answer = answer + bandage[1] + bandage[2]
                    if (answer >= health) answer = health
                } else{
                    // 초당회복
                    console.log()
                    answer += bandage[1]
                    if (answer >= health) answer = health
                }
            } else{
                // console.log('맞았따!!!!')
                continuity = 0
                answer -= damage
                if (answer <= 0) break
            }
            // console.log('현재체력:', answer)
        }
        preTime = attackTime
        if(answer <= 0) break
    }

    return answer <= 0 ? -1 : answer
}
