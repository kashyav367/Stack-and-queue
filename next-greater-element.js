function ngE(nums1,nums2){

    let stack = [];
    let ngeMap = {};
    let n = nums2.length;

    stack.push(nums2[n-1]);
    ngeMap[nums2[n-1]] = -1;

    for(let i =  n-2 ; i >= 0 ; i--){

        while(stack.length){
            if(stack[stack.length-1] < nums2[i]){
                stack.pop();
            }
            else{
                ngeMap[nums2[i]] = stack[stack.length-1];
                break;
            }
        }
        if(stack.length === 0){
            ngeMap[nums2[i]] = -1;
        }
        stack.push(nums2[i]);
    }
    return nums1.map(x => ngeMap[x]);
}

let nums1 = [4,1,2]
let  nums2 = [1,3,4,2]

console.log(ngE(nums1,nums2));