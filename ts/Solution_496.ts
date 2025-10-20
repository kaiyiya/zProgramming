    function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
        const map = new Map<number, number>()
        function fun(index: number) {
            if (index >= nums2.length) return
            fun(index + 1)
            initMap(index)
        }

        function initMap(index) {
            let cur = nums2[index]
            let curIndex = index + 1
            while (curIndex <= nums2.length && nums2[curIndex] < cur) {
                curIndex++
            }
            if (nums2[curIndex] > cur) {
                map.set(nums2[index], nums2[curIndex])
            } else {
                map.set(nums2[index], -1)
            }
        }
        fun(0)
        let newMap = nums1.map(item => {
            return map.get(item) ?? -1
        })
        return newMap
    };