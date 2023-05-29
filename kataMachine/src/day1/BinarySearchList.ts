export default function bs_list(haystack: number[], needle: number): boolean {
    let low = 0;
    let high = haystack.length;

    do {
        const middle = Math.floor(low + (high - low) / 2);
        const currentValue = haystack[middle];

        if (needle === currentValue) {
            return true;
        } else if (needle > currentValue) {
            low = middle + 1;
        } else {
            high = middle;
        }
    } while (low < high);
    return false;
}
