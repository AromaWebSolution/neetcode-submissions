class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        let i = 0;
        let indices = [];

        while(i < nums.length){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[i] + nums[j] === target){
                indices.push(i, j);
            }
        }
        i++;
        }
        return indices;
    }
}
