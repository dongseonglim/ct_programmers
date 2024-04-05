function solution(today, terms, privacies) {
    var answer = []
    today = new Date(today)        
    const compare = {}
    
    terms.forEach(element => {
        var chars = element.split(' ')
        compare[chars[0]] = chars[1]
    })
    
    privacies.forEach((el, index) => {
        var due = el.split(' ')
        var expire = new Date(due[0])
        expire.setMonth(expire.getMonth() + Number(compare[due[1]]))
        expire <= today ? answer.push(index+1) : null
    })
    return answer
}
