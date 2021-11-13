export class Friend {
    constructor(name) {
        this.name = name;
        this.isFav = false;
    }

    toggleFav() {
        this.isFav = !this.isFav;
    }
}

export const mockData = [
    new Friend('rahul gupta'),
    new Friend('wolf gupta')
];

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function capitalizeAllFirst(sentence) {
    return sentence
        .split(' ')
        .map(str => capitalizeFirstLetter(str))
        .join(' ');
}

export const hasFriend = function (list, nameVal) {
    return list.some(frnd => frnd.name === nameVal);
}

export const friendSortFunc = function (frndA, frndB) {
    if (frndA.isFav > frndB.isFav) {
        return -1;
    }
    if (frndA.isFav < frndB.isFav) {
        return 1;
    }
    return 0;
};

export const PAGE_SIZE = 4;