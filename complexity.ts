// O(N) time complexity
// Always look for loops
function sum_char_codes(n: string): number {
  let sum = 0;
  for (let i = 0; i < n.length; ++i) {
    sum += n.charCodeAt(i);
  }

  return sum;
}

console.log(sum_char_codes("kedi"));

// Constants are dropped
// Still O(N)
function double_sum_char_codes(n: string): number {
    let sum = 0;
    for (let i = 0; i < n.length; ++i) {
        sum += n.charCodeAt(i);
    }

    for (let i = 0; i < n.length; ++i) {
        sum += n.charCodeAt(i);
    }

    return sum;
}

// IT'S STILL O(N)
// Worst case is usually the way we measure
function worst_case_sum_char_codes(n: string): number {
    let sum = 0;
    for (let i = 0; i < n.length; ++i) {
        const charCode = n.charCodeAt(i);
        // Capital E
        if (charCode === 69) {
            return sum;
        }

        sum += charCode;
    }

    return sum;
}

// Fastest to slowest
// O(1) => O(logN) => O(N) => O(NlogN) => O(N^2) => O(2^N) => O(N!)

// O(N^2)
function square_sum_char_codes(n: string): number {
    let sum = 0;
    for (let i = 0; i < n.length; ++i) {
        for (let j = 0; j < n.length; ++j) {
            const charCode = n.charCodeAt(i);
            sum += charCode;
        }
    }

    return sum;
}

// O(N^3)
function triple_sum_char_codes(n: string): number {
    let sum = 0;
    for (let i = 0; i < n.length; ++i) {
        for (let j = 0; j < n.length; ++j) {
            for (let k = 0; k < n.length; ++k) {
                sum += charCode;
            }
        }
    }
    return sum;
}
