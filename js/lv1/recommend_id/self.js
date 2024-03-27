function solution(new_id) {
    var answer = '';
    const specialChar = new RegExp(/[~!@#$%^&*()=+[{\]}:?,<>\/]/g)
    
    // 1,2 3 4
    answer = new_id.toLowerCase()
    .replace(specialChar, '')
    .replace(/\.{2,}/g, '.')
    .replace(/^\.?(.*?)\.?$/, '$1')
    // 5
    answer === '' ? answer += 'a' : answer
    // 6
    answer.length >= 16 ? answer = answer.substring(0, 15) : answer
    answer[answer.length-1]=='.' ? answer = answer.substring(0, answer.length-1) : answer
    // 7
    answer.length <= 2 ? answer = answer.padEnd(3, answer[answer.length-1]) : answer

    return answer;
}
