function solution(nums) {
    var answer = 0
    const pickCnt = nums.length / 2
    let kinds = {}
    nums.forEach(v => {
        kinds[v] ? kinds[v]++ : kinds[v] = 1
    })
    const pokCnt = Object.keys(kinds).length
    if (pokCnt >= pickCnt){
        answer = pickCnt
    } else {
        answer = pokCnt
    }
        
    return answer
}
