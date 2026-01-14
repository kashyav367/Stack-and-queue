function eRPV(arr){
    let stack = [];

    let map = {
        "+" : (a,b) => (b+a),
        "-" : (a,b) => (b-a),
        "*" : (a,b) => (b*a),
        "/" : (a,b) => Math.trunc(b/a)
    }

    for(let i=0 ; i<arr.length ; i++){
        if(map[arr[i]]){
        let a = stack.pop();
        let b = stack.pop();

        let ans = map[arr[i]](Number(a),Number(b));
        stack.push(ans);
        }
        else{
            stack.push(arr[i]);
        }
    }
    return Number(stack[0]);
}

let arr = ["2","1","+","3","*"];
console.log(eRPV(arr));