class NumArray {
    arr: number[]
    constructor(nums: number[]) {
        this.arr = nums;
    }

    sumRange(left: number, right: number): number {
        if (left === right) return this.arr[left]
        let res = this.sumRange(left + 1, right);
        return res + this.arr[left]
    }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */