class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const sorted = nums.sort((a, b) => a - b)
        let result = []
        for (let i = 0; i < sorted.length-2; i++) {
            if(sorted[i] === sorted[i - 1]) continue
            let left = i + 1
            let right = sorted.length -1
                while (left < right) {
                    const sum = sorted[i] + sorted[left] + sorted[right]
                    if( sum === 0) {
                        let indexes = [sorted[i], sorted[left], sorted[right]]
                        result.push(indexes)
                        left ++
                        right --
                        while (left < right && sorted[left] === sorted[left - 1]) left++;
                        //while (left < right && sorted[right] === sorted[right + 1]) right--;
                    }
                    if(sum < 0) {
                      left++
                    }
                    if(sum > 0) {
                        right--
                    }        
                }
            }
            return result
        }
    }
