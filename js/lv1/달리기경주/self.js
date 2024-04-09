function solution(players, callings) {
    let idx;
    let slowName;
    const rank = {}

    players.forEach((name,index)=>rank[name]=index)
    for(let call of callings){
        idx = rank[call]
        slowName = players[idx-1]
        rank[call] -= 1
        rank[slowName] += 1
        players[idx] = slowName
        players[idx-1] = call
    }
    
    return players
}
