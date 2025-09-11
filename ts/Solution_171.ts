function titleToNumber(columnTitle: string): number {

    function getNum(index: number) {
        if (index == 0) return columnTitle[index].charCodeAt(0) - 64
        let res = getNum(index - 1);
        return 26 *res +  (columnTitle[index].charCodeAt(0) - 64)
    }
    return getNum(columnTitle.length - 1)


};