function binarySearch1(arr, num) {
    let low = 0;
    let high = arr.length - 1;
    let mid = Math.floor((high + low) / 2)
    while(low <= high) {
     if (num === arr[low]) return low;
     else if (num === arr[high]) return high;
     else if (num === arr[mid]) return mid;
     else if (num < arr[mid]) high = mid - 1;
     else if (num > arr[mid]) low = mid + 1;
     mid = Math.floor((high + low) / 2)
    }
    return -1;
  }
// refactored, dont need to check for high and low each time
  function binarySearch(arr, num) {
    let low = 0;
    let high = arr.length - 1;
    if (num > arr[high] || num < arr[low]) return -1;
    if (num === arr[low]) return low;
    else if (num === arr[high]) return high;
    let mid = Math.floor((high + low) / 2);
    while(low < high) {
     if (num === arr[mid]) return mid;
     else if (num < arr[mid]) high = mid - 1;
     else if (num > arr[mid]) low = mid + 1;
     mid = Math.floor((high + low) / 2)
    }
    return -1;
  }

  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]
  console.log(binarySearch(arr, 10))

log2( 1 )    = 0
log2( 2 )    = 1
log2( 4 )    = 2
log2( 8 )    = 3
log2( 16 )   = 4
log2( 32 )   = 5
log2( 64 )   = 6
log2( 128 )  = 7
log2( 256 )  = 8
log2( 512 )  = 9
log2( 1024 ) = 10
