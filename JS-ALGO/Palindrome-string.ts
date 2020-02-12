function isPalindrome(str:string) {
    console.log(str.split('').reverse().join('') === str);
    return str.split('').reverse().join('') === str;
  }

  isPalindrome('A man, a plan, a canal -- Panama')
  isPalindrome('King, are you glad you are king') //wont work with spaces
  isPalindrome('detartrated')
  isPalindrome('level')