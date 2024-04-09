function solution(park, routes) {
    const dirs = { E: [0, 1], W: [0, -1], S: [1, 0], N: [-1, 0] }
    let [x, y] = [0, 0]
    for (let i = 0; i < park.length; i++) {
        if (park[i].includes('S')) {
            [x, y] = [i, park[i].indexOf('S')]
            break;
        }
    }
    
    routes.forEach(route => {
        const [dir, count] = route.split(' ')
        let [tx, ty] = [x, y]
        let cnt = 0
        for(let i=0; i<count; i++){
            [tx, ty] = [tx + dirs[dir][0], ty + dirs[dir][1]]
            if(!park[tx] || !park[tx][ty] || park[tx][ty]==='X') break;
            cnt++
        }
        if (cnt == count)[x, y] = [tx, ty]
    })

    return [x, y]
}
