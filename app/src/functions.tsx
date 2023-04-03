import type { Color } from './Color.type';

const sort = (arr: Color[]) => {
    return arr.sort((a: Color, b: Color) => {
        const ar = parseInt(a.value[1] + a.value[2], 16);
        const br = parseInt(b.value[1] + b.value[2], 16);

        if (ar > br) {
            return -1;
        } else if (ar < br) {
            return 1;
        } else {
            const ag = parseInt(a.value[3] + a.value[4], 16);
            const bg = parseInt(b.value[3] + b.value[4], 16);

            if (ag > bg) {
            return -1;
            } else if (ag < bg) {
            return 1;
            } else {
            const ab = parseInt(a.value[5] + a.value[6], 16);
            const bb = parseInt(b.value[5] + b.value[6], 16);

            if (ab > bb) {
                return -1;
            } else if (ab < bb) {
                return 1;
            } else {
                return 0;
            }
            }
        }
    })
}

export default sort;
