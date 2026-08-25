class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = {}
        for (const num of nums) {
            count[num] = (count[num] || 0) + 1
        }

        const keys = Object.keys(count)

        const sorted = keys.sort((a, b) => count[b] - count[a]) 
        const result = sorted.slice(0, k)
    return result
    }
}
