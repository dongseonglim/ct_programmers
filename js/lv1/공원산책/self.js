function solution(park, routes) {
    var hw = [park.length, park[0].length]
    var location = [,]

    park.forEach((v, i) => {
        if(v.includes('S')){
            location[0] = i
            location[1] = v.indexOf('S')
        }
    })

    routes.forEach((v, i) => {
        let [dir, count] = v.split(' ')
        count = Number(count)
        location = judging(park, hw, location, dir, count)
    })
    
    return location
}

function judging(park, hw, lo, dir, count) {
    let range = true
    let obstacle = true
    if(dir === "E"){
        if(lo[1] + count +1 > hw[1]){
            range = false
        } else {
            for (let i=1; i<=count; i++){
                if(park[lo[0]][lo[1]+i] === "X"){
                    obstacle = false
                }
            }
            if(obstacle){
                lo[1] += count
            }
        }
    } else if(dir === "W"){
        if(lo[1] - count < 0){
            range = false
        } else {
            for (let i=1; i<=count; i++){
                if(park[lo[0]][lo[1]-i] === "X"){
                    obstacle = false
                } 
            }
            if(obstacle){
                lo[1] -= count
            }
        }
    } else if(dir === "S"){
        if(lo[0] + count +1 > hw[0]){
            range = false
        } else{
            for (let i=1; i<=count; i++){
                if(park[lo[0]+i][lo[1]] === "X"){
                    obstacle = false
                }
            }
            if(obstacle){
                lo[0] += count
            }
        }
    } else if(dir === "N"){
        if(lo[0] - count < 0){
            range = false
        } else{
            for (let i=1; i<=count; i++){
                if(park[lo[0]-i][lo[1]] === "X"){
                    obstacle = false
                }
            }
            if(obstacle){
                lo[0] -= count
            }
        }
    }
    return lo
}

console.log(solution(["SOO","OOO","OOO"], ["E 2","S 2","W 1"])) //[2,1]
