class Solution {
    getConcatenation(nums) {
        let ans = [...nums]
        //let n = arr.length
        for(let n in nums){
            ans.push(nums[n])
        }
        return ans
    }
}
