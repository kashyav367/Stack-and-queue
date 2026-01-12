function removeOutermostParenthesis(s){
    let level = 0;
    let ans = "";

    for(let i=0 ; i<s.length ; i++){
        if(s[i] === "("){
            level++;
         ans += ((level > 1) ? s[i] : "");   
        }
        else{
              ans += ((level > 1) ? s[i] : "");  
              level--; 
        }
    }
    return ans;
}

let s = "(()())(())(()(()))";
console.log(removeOutermostParenthesis(s));