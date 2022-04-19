function findRotatedIndex(arr,target) {

    let i = 0;
    let j = arr.length-1;
    breakpoint = -1;

    if (arr[i]<arr[j]){
        return 0
    }

    while(i<=j){
        let middle = Math.floor((i+j)/2)
        if((arr[middle]<arr[middle-1]) &&(arr[middle]<=arr[middle+1] || middle === arr.length-1)){
            breakpoint = middle
        }
        if(arr[middle]>arr[j]){
            i = middle +1
        }
        else{
            j = middle-1
        }
    }

    if(target<arr[breakpoint]){
        return -1
    }
    if(target>arr[breakpoint-1]){
        return -1
    }
    if(target>=arr[0] && target<=arr[breakpoint-1]){
        let first = 0;
        let second = breakpoint-1;
        while(first<=second){
            let middle = Math.floor((first+second)/2)
            if(arr[middle]===target){
                return middle
            }
            if(arr[middle]>target){
                second = middle -1
            }
            else{first = middle +1}
        }
        return -1
    }
    if(target>=arr[breakpoint] && target<=arr[arr.length-1]){
        let first = breakpoint;
        let second = arr.length-1;
        while(first<=second){
            let middle = Math.floor((first+second)/2)
            if(arr[middle]===target){
                return middle
            }
            if(arr[middle]>target){
                second = middle -1
            }
            else{first = middle +1}
        }
        return -1
    }


}


module.exports = findRotatedIndex;
