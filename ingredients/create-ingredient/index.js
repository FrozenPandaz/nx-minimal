export function createIngredient(color, thickness) {
    const ingredient = document.createElement('div');

    ingredient.classList.add('ingredient');

    ingredient.style.background = color;
    ingredient.style.height = thickness + 'px';

    return ingredient;
}
