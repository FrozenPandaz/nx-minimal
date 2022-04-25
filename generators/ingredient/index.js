module.exports = function (tree, options) {
    const { name, color, thickness } = options;
    tree.write(`ingredients/${name}/index.js`, `
    import { createIngredient } from '../create-ingredient/index.js'

    export function ${name}() {
        return createIngredient('${color}', ${thickness});
    }
    `);

    tree.write(`ingredients/${name}/project.json`, `{}`);
}
