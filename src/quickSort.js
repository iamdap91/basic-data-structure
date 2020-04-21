const swap = (arr, indexA, indexB) => {
    const tmp = arr[indexA];
    arr[indexA] = arr[indexB];
    arr[indexB] = tmp;
}

const quickSort = (arr, left = 0, right = (arr.length - 1)) => {
    let index;
    if (arr.length > 1) {
        index = partition(arr, left, right);
        if (left < index - 1) quickSort(arr, left, index - 1);
        if (index < right) quickSort(arr, index, right);
    }
    return arr;
}

const partition = (arr, _left, _right) => {
    let pivot = arr[Math.floor((_right + _left) / 2)];
    let left = _left;
    let right = _right;

    // pivot 바로 양 옆 녀석들까지 비교하고 바꿔준다. 
    while (left <= right) {
        while (arr[left] < pivot) left++;
        while (arr[right] > pivot) right--;
        if (left <= right) {
            swap(arr, left, right);
            left++;
            right--;
        }
    }
    return left;
}


{
    const arr = [];
    for (let i = 0; i < 20; i++) arr.push(Math.round(Math.random() * 50));
    const set = new Set(arr);
    const ArrayToSort = Array.from(set);

    process.stdout.write('before sort : ');
    console.log(ArrayToSort);
    process.stdout.write('after sort  : ');
    console.log(quickSort(ArrayToSort));
}
