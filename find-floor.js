function findFloor(arr,target) {
    let i = 0;
    let j = arr.length-1;

    while(i<=j){
        let middle = Math.floor((i+j)/2)
        if(arr[middle]<=target && (arr[middle+1]>target || middle===arr.length-1)){
            return arr[middle]
        }
        else if(arr[middle]<=target && arr[middle+1]<=target){
            i = middle +1
        }
        else{
            j = middle-1
        }
    }
    return -1
}

module.exports = findFloor