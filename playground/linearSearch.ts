// a[0.................N]
// search(arr, value)
// we'll be implementing indexOf() in a sense
// O(N)

export default function linear_search(
    haystack: number[],
    needle: number,
): boolean {
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle) {
            return true;
        }
    }
    return false;
}