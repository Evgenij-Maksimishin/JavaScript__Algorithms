const arr = [2, 5, 3, 10, 7, 555, 100, 25];

const quickSort = (arr) => {

    if (arr.length < 2) {
        return arr;
    }

    const middleNum = Math.floor(arr.length / 2);

    const leftNums = arr.filter(el => el < arr[middleNum]);

    const rightNums = arr.filter(el => el > arr[middleNum]);

    return [...quickSort(leftNums), arr[middleNum], ...quickSort(rightNums)];
}

console.log(quickSort(arr));