class Solution {
    trap(height) {
        let left = 0
        let right = height.length - 1
        let maxLeft = 0
        let maxRight = 0
        let total = 0

        while (left < right){
            if (height[left] < height[right]){
                maxLeft = Math.max(maxLeft, height[left])
                total = total + maxLeft - height[left]
                left++
            }
            else {
                maxRight = Math.max(maxRight, height[right])
                total = total + maxRight - height[right]
                right--
            }
        }
        return total
    }
}