/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    function move(index: number) {
        if (index < 0) return
        move(index - 1)
        if (nums[index] === 0) return
        let nowIndex = index
        while (nowIndex > 0) {
            if (nums[nowIndex - 1] === 0) {
                nowIndex--;
            } else {
                break
            }
        } if (nowIndex > 0 || nowIndex === 0 && nums[nowIndex] === 0) {
            nums[nowIndex] = nums[index]
            nums[index] = 0
        }
    }
    move(nums.length - 1)
   
};
moveZeroes([-1, 2, 5, 0, 6, 0, 3, 0, 9, 9])