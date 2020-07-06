module.exports = {
    parser: 'babel-eslint',
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        node: true,
        jest: true,
    },
    extends: ['eslint:recommended', 'plugin:react/recommend'],
    parserOptions: {
        emaFeatures: {
            jsx: true,
        },
        sourceType: 'module',

    },
    plugin: ['react'],
    rules: {

    },
};