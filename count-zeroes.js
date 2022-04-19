function countZeroes(arr) {
    len = arr.length

    let i = 0;
    let j = len;

    while(i<j){
        let middle = Math.floor((i+j)/2)
        if (arr[middle]===1 && arr[middle+1]===0){
            return (len-middle-1)
        }
        if(arr[middle]===1 && arr[middle+1]!==0){
            i = middle+1
        }
        if(arr[middle]===0 && arr[middle-1]===1){
            return(len-middle)
        }
        if(arr[middle]===0 && arr[middle-1]!==1){
            j = middle-1
        }
    }
    if(arr[0]===1){
        return(0)
    }
    return (len)

}

module.exports = countZeroes