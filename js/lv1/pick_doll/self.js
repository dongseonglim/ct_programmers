function solution(board, moves) {
    var boom = 0;
    var basket = [];
    let tempBoard = board;
    moves.forEach(pick => {
        
        for (line of tempBoard) {
            if(line[pick-1] === 0){
                continue;
            } else {
                basket.push(line[pick-1]);
                if(basket.length >= 2 && basket[basket.length-1] == basket[basket.length-2]) {
                    basket.splice(basket.length-2, 2);
                    boom += 2;
                } 
                line[pick-1] = 0;
                break;
            }
        }
    })
    return boom;
}
