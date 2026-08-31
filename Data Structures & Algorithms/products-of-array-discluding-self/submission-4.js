class Solution {
    productExceptSelf(nums) {
        const n = nums.length;
        const output = [];

        output[0] = 1;
        for (let i = 1; i < n; i++) {
            output[i] = output[i - 1] * nums[i - 1];
        }
        let rightProduct = 1;
        for (let i = n - 1; i >= 0; i--) {
            output[i] *= rightProduct;      
            rightProduct *= nums[i];
        }
        return output;
    }
}