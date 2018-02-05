module.exports = {
    extends: ['standard', 'plugin:react/recommended'],
    plugins: ['react', 'jsx-a11y', 'import'],
    rules: {
        'react/jsx-filename-extension': 0,
        'react/prop-types': 0,
        'jsx-a11y/anchor-is-valid': 0,
        semi: 0,
        indent: 0,
        'space-before-function-paren': 0
    },
    globals: {
        document: 1
    },
    parser: 'babel-eslint',
    env: {
        browser: 1
    }
};
