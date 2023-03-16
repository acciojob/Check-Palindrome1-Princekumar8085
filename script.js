// complete the given function
 function check_palindrome( str )
    {
      let j = str.length -1;
      for( let i = 0 ; i < j/2 ;i++)
      {
        let x = str[i] ;//forward character
        let y = str[j-i];//backward character
        if( x != y)
        {
          // return false if string not match
          return false;
        }
      }
      /// return true if string is palindrome
      return true;
       
    }
function palindrome(str){
 let ans = check_palindrome(str);
      //condition checking ans is true or not
      if( ans == true )
      {
        console.log("yes");
      }
      else
      {
        console.log("false");
}
module.exports = palindrome
