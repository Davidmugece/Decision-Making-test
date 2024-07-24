function isPalindrome(s) {
    s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase(); // Remove non-alphanumeric characters and convert to lower case

    function checkPalindrome(s, left, right) {
        if (left >= right) {
            return true;
        }
        if (s[left] !== s[right]) {
            return false;
        }
        return checkPalindrome(s, left + 1, right - 1);
    }

    return checkPalindrome(s, 0, s.length - 1);
}

// Test the function
const string = "A man, a plan, a canal, Panama";
if (isPalindrome(string)) {
    console.log(`"${string}" is a palindrome.`);
} else {
    console.log(`"${string}" is not a palindrome.`);
}
