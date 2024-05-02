function solution(brown, yellow) {
    let [h, w] = [3, 3]
    for (var width=3; width<=2500; width++){
        for (var height=3; height<=2500; height++) {
            if (2*width + 2*(height-2) === brown && (width-2)*(height-2) === yellow) {
                [h, w] = [height, width]
                break
            }
        }
        if (2*w + 2*(h-2) === brown && (w-2)*(h-2) === yellow) break
    }

    return [w, h].sort((a, b) => b - a)
}
