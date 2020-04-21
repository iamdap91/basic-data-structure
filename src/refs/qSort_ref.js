function swap(_arr, _firstIndex, _secondIndex) {
    var temp = _arr[_firstIndex];
    _arr[_firstIndex] = _arr[_secondIndex];
    _arr[_secondIndex] = temp;
}

function partition(_arr, _left, _right) {

    var pivot = _arr[Math.floor((_right + _left) / 2)],
        left = _left,
        right = _right;

        
    while (left <= right) {

        while (_arr[left] < pivot) {
            left++;
        }

        while (_arr[right] > pivot) {
            right--;
        }

        if (left <= right) {
            swap(_arr, left, right);
            left++;
            right--;
        }
    }

    return left;
}

function arrSort(_arr, _left, _right) {
    var index;

    if (_arr.length > 1) {

        _left = typeof _left != 'number' ? 0 : _left;                       // left 0
        _right = typeof _right != 'number' ? _arr.length - 1 : _right;      // right arr.length - 1

        index = partition(_arr, _left, _right);

        if (_left < index - 1) {
            arrSort(_arr, _left, index - 1);
        }

        if (index < _right) {
            arrSort(_arr, index, _right);
        }

    }

    return _arr;
}

var arr = [9, 5, 2, 7, 7, 8],
    res = null;

res = arrSort(arr);

// console.log(res);
// console.log(res[res.length - 2]);