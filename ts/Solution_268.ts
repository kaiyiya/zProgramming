    function missingNumber(nums: number[]): number {
        let map = new Array(nums.length + 1).fill(0)
        function sort(index: number) {
            if (index === nums.length) return
            map[nums[index]] = 1
            sort(index + 1)
        }
        sort(0)
        console.log(map);
        return nums.forEach((item, index) => {
            if (item !== 1) return index;
        }) ?? -1

};
    
missingNumber([3,0,1])
