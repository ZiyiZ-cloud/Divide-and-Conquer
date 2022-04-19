function findRotationCount(arr) {
  
    let i = 0;
    let j = arr.length-1;

    if (arr[i]<arr[j]){
        return 0
    }

    while(i<=j){
        let middle = Math.floor((i+j)/2)
        if((arr[middle]<arr[middle-1]) &&(arr[middle]<=arr[middle+1] || middle === arr.length-1)){
            return middle
        }
        if(arr[middle]>arr[j]){
            i = middle +1
        }
        else{
            j = middle-1
        }
    }

}

module.exports = findRotationCount

