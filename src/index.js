import { names } from './starwars-names.js';
import unique from 'unique-random-array';

function getRandomItem(count) {
    if (count) {
        let randomItems = [];
        for (let i = 0; i < count; i++) {
            randomItems.push(unique(starWarsNames)());
        }
        return randomItems;
    }
    return unique(starWarsNames)();
};

export default {
    all: names,
    random: getRandomItem
};