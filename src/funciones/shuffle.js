export function shuffle(arr) {
    let arr2 = []
    while (arr.length > 0) {
        const positionRamdon = Math.round(Math.random() * arr.length)
        const elemen = arr.splice(positionRamdon, 1)
        arr2 = arr2.concat(elemen)
    }
    return arr2
}