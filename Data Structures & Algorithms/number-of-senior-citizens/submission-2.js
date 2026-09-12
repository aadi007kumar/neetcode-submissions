class Solution {
    /**
     * @param {string[]} details
     * @return {number}
     */
    countSeniors(details) {
        let count = 0
        let n = details.length
        for(let i = 0;i<n;i++){
            if(details[i].slice(11,13)>60){
                count++
            }
        }
        return count
    }
}
