function searchInsert(nums: number[], target: number): number {
    //这个方法的作用是返回某个值最接近的左边元素的下标
    function getLeftIndex(start: number, end: number) {
        if (start >= end) return start;
        let mid = Math.floor((start + end) / 2)
        let index = start;
        if (nums[mid] >= target) {
            index = getLeftIndex(start, mid);
        } else {
            index = getLeftIndex(mid + 1, end);
        }
        return index;
    }
    return getLeftIndex(0, nums.length)
};
console.log(searchInsert([1, 3, 5, 6], 5));

