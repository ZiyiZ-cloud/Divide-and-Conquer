function sortedFrequency(arr,target) {

    let i = 0;
    let j = arr.length;
    let first = -1;
    let second = -1;

    while(i<=j){
        let middle = Math.floor((i+j)/2)
        if(arr[middle]===target){
            second = middle
        }
        if(arr[middle]>target){
            j = middle -1
        }
        else{
            i = middle +1
        }
    }
    i =0;
    j = arr.length;
    while(i<=j){
        let middle = Math.floor((i+j)/2)
        if(arr[middle]===target && (arr[middle-1]<target || middle===0)){
            first = middle
            break
        }
        else if(arr[middle]>=target){
            j = middle -1
        }
        else{
            i = middle +1
        }
    }

    if(first===-1){
        return -1
    }else{
        return(second-first+1)
    }
}

module.exports = sortedFrequency

