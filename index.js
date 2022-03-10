var findMedianSortedArrays = function(nums1, nums2) {
    let nums3 = [...nums1, ...nums2];
    function sortArray(a,b){
        return a - b;
    }
    nums3 = nums3.sort(sortArray);
    
    if (nums3.length % 2 != 0) return nums3[Math.ceil((nums3.length/2))-1];
    if (nums3.length % 2 == 0) return (nums3[(nums3.length)/2 -1] + nums3[(nums3.length/2 )]) / 2; 
    };
