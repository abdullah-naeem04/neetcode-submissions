class Solution {
    isPalindrome(s) {
        let trimedString = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "")
        console.log(trimedString)        
        let left = 0;
        let right = trimedString.length - 1;
        while (left < right){
            if(trimedString[left] === trimedString[right]){
                left ++
                right --
            }
            else{
                return false

            }
        }
            return true
    }
}