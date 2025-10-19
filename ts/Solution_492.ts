function constructRectangle(area: number): number[] {
    function findWidth(w: number): number[] {
        if (w < 1) return [area, 1];
        if (area % w === 0) return [area / w, w];
        return findWidth(w - 1); // 尾递归调用
    }
    
    return findWidth(Math.floor(Math.sqrt(area)));
}