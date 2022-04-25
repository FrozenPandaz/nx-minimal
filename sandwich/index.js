import { bread } from '../ingredients/bread/index.js';
import { bacon } from '../ingredients/bacon/index.js';
import { tomato } from '../ingredients/tomato/index.js';
import { lettuce } from '../ingredients/lettuce/index.js';

export function createSandwich() {
    const sandwich = document.createElement('div');
    sandwich.id = 'sandwich';

    sandwich.appendChild(bread());
    sandwich.appendChild(bacon());
    sandwich.appendChild(tomato());
    sandwich.appendChild(lettuce());
    sandwich.appendChild(bread());

    return sandwich;
}
