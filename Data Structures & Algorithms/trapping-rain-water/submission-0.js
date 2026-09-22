class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let left = 0
        let right = height.length - 1
        let maxLeft = 0
        let maxRight = 0
        let total = 0

        while (left < right){
            if (height[left] < height[right]){


                left++
            }
            else {
                right++
            }
        }
        return total
    }
}
