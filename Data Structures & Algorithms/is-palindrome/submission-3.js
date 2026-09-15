class Solution {
    isPalindrome(s) {
    let left = 0;
    let right = s.length - 1;
    const isAlphanumeric = c => /[a-z0-9]/i.test(c);

    while (left < right) {
        // Skip non-alphanumeric chars from the left
        while (left < right && !isAlphanumeric(s[left])) {
            left++;
        }
        // Skip non-alphanumeric chars from the right
        while (left < right && !isAlphanumeric(s[right])) {
            right--;
        }
        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}
}