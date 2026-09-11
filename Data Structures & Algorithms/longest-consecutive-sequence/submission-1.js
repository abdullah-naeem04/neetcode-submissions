class Solution {
    longestConsecutive(nums) {
        if (nums.length <= 0)
        return 0;
        let longest = 1
        let current = 1
        const sortedNums = nums.sort((a,b) => a - b);
        for(let i = 0; i < sortedNums.length; i++) {
            if (sortedNums[i] === sortedNums[i - 1]) continue
            if (sortedNums[i] === sortedNums[i - 1] + 1 ) {
                current = current + 1
            }
            if(sortedNums[i] !== sortedNums[i - 1] +1) {
                current = 1
            }
            longest = Math.max(longest, current);
        }
        return longest;
    }
}
