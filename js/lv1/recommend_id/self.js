function solution(new_id) {
    var answer = '';
    const specialChar = new RegExp(/[~!@#$%^&*()=+[{\]}:?,<>\/]/g)
    
    answer = new_id.toLowerCase()
    .replace(specialChar, '')
    .replace(/\.{2,}/g, '.')
    .replace(/^\.?(.*?)\.?$/, '$1')
    
    answer === '' ? answer += 'a' : answer
    answer.length >= 16 ? answer = answer.substring(0, 15) : answer
    answer[answer.length-1]=='.' ? answer = answer.substring(0, answer.length-1) : answer
    answer.length <= 2 ? answer = answer.padEnd(3, answer[answer.length-1]) : answer

    return answer;
}
