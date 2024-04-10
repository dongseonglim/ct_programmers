function solution(id_list, report, k) {
    var answer = []
    let record = {}
    report.forEach(v => {
        let [user, comp] = v.split(' ')
        if(record[user]){
            record[user].add(comp)
        } else{
            let set1 = new Set()
            set1.add(comp)
            record[user] = set1
        }
    })

    let count = {}
    for (let el in record) {
        record[el].forEach(v => {
            if (!count[v]) {
                count[v] = 1
            }else {
                count[v] += 1
            }
        })
    }
    
    let penalty = id_list.filter(v => count[v] >= k)

    id_list.forEach(el => {
        var reportList = record[el]
        var cnt = 0
        if(reportList){
            reportList.forEach(v => {
                if (penalty.includes(v)) cnt++
            })
        }

        answer.push(cnt)
    })
    return answer
}
