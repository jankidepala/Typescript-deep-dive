function isPalindrome(str) {
    console.log(str.split('').reverse().join('') === str);
    return str.split('').reverse().join('') === str;
}
isPalindrome('A man, a plan, a canal -- Panama');
isPalindrome('King, are you glad you are king');
isPalindrome('detartrated');
isPalindrome('level');
