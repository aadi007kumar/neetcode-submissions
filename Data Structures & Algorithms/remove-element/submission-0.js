class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        if(nums.length===0) return 0
        let left=0, right =0
        while(right<nums.length){
            if(nums[right]!==val){
                nums[left]=nums[right]
                left++
                right++
            }else{
                right++
            }
        }
        return left

    }
}
