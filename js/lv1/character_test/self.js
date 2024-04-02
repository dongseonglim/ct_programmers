function solution(survey, choices) {
    var answer = '';
    const choice_point = [0, 3,2,1,0,1,2,3]
    var board = {
        'RT' : [0, 0],
        'CF' : [0, 0],
        'JM' : [0, 0],
        'AN' : [0, 0],
    }
    survey.forEach((type, i) => {
        Object.keys(board).forEach(t => {
            var l_r
            type == t ? choices[i]<4 ? l_r = 0 : l_r = 1 : choices[i]<4 ? l_r = 1 : l_r = 0
            if(t.includes(type[0])){
                board[t][l_r] += choice_point[choices[i]]
            }
        })
    })
    Object.keys(board).forEach((t, i) => {
        board[t][0] == board[t][1] ? answer+=t[0]: board[t][0] > board[t][1] ? answer += t[0] : answer += t[1]
    })
    return answer;
}
