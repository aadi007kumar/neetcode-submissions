class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    searchInsert(nums, target) {
        let left = 0, right = nums.length
        for(let i=0;i<nums.length;i++){
            let mid = Math.floor((left+right)/2)
            if(nums[mid]===target) return mid
            else if(nums[mid]<target) left = mid+1
            else right = mid-1
        }
        return left;
    }
}
