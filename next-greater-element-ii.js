function ngE(arr){
    let n = arr.length;

    let stack = [];
    let ans = Array(n).fill(0);

    stack.push(arr[n-1]);

    for(let i= (2*n)-2 ; i>=0 ; i--){
        while(stack.length){
            let top = stack[stack.length-1];
            if(arr[i%n] < top){
                ans[i%n] = top;
                break;
            }
            else{
                stack.pop();
            }
        }
        stack.push(arr[i%n]);
    }
    return ans.slice(0,n);
}

let arr = [1,2,3,4,3];
console.log(ngE(arr));