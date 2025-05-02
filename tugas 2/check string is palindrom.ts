// 5. Cek apakah string adalah palindrome
function isPalindrome(str: string): boolean {
  const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return cleanedStr === cleanedStr.split("").reverse().join("");
}
console.log(isPalindrome("madam")); // Output: true
console.log(isPalindrome("hello")); // Output: false 