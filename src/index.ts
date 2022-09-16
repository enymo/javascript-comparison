export default function compare<T>(a: T, b: T, order?: T[]): 1 | 0 | -1 {
    if (order) {
        return compare(order.indexOf(a), order.indexOf(b));
    }
    else {
        if (a < b) {
            return -1;
        }
        else if (a > b) {
            return 1;
        }
        else {
            return 0;
        }
    }
}