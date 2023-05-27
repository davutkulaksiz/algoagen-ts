// Is your dataset ordered?
// worst case => O(logN)
// We can jump to the middle of the array to find the value
// go right or go left 
// depending on if the half of the array is less or more than the value we look

// IF THE INPUT HALVES AT EACH STEP, IT'S LIKELY O(logN) or O(NlogN)

/*
search(arr, low, high, needle) [0 ..................... N]

do {
    middle = low + (high - low) / 2
    value = arr[middle]

    if value = needle
        return true

    else if needle > value:
        low = middle + 1

    else
        high = middle
} while (low < high)
return false
*/

// REMEMBER LOW IS ALWAYS INCLUSIVE HIGH IS ALWAYS EXCLUSIVE
// [LOW, HIGH)

// Array is sorted

export default function bs_list(haystack: number[], needle: number): boolean {
    let low = 0;
    let high = haystack.length;

    do {
        const middle = Math.floor(low + (high - low) / 2);
        const value = haystack[middle];

        if (value === needle) {
            return true;
        } else if (needle > value) {
            low = middle + 1;
        } else {
            high = middle;
        }
    } while (low < high);
    return false;
}