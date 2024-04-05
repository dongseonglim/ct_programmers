function solution(wallpaper) {
    var answer = []

    var [sx, sy, ex, ey] = [, wallpaper[0].length, 0, 0]

    wallpaper.forEach((a, i) => {
        var b = a.indexOf('#')
        var c = a.lastIndexOf('#')
        
        b !== -1 && sx === undefined ? sx = i : null // 1
        b !== -1 && sy > b ? sy = b : null // 2
        ey < c+1 ? ey = c + 1 : null // 4
        b !== -1 ? ex = i + 1 : null // 3
        
    })
    answer = [sx, sy, ex, ey]

    return answer
}
