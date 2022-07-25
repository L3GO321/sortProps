export function orderByProps(obj, sortOrder) {
    const arr = [];

    for (let key in obj) {
        arr.push({
            key,
            value: obj[key]
        })
    }

    arr.sort((prev, next) => {
        if (prev.key < next.key) {
            return -1
        } else {
            return 1
        }
    })

    for (let i = sortOrder.length - 1; i >= 0; i--) {
        const findIndex = arr.findIndex(el => el.key === sortOrder[i])

        arr.unshift(arr[findIndex])
        arr.splice(findIndex + 1, 1)
    }

    return arr
}


