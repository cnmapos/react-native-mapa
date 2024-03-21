module.exports = {
    root: true,
    extends: ['@react-native', 'airbnb/hooks'],
    rules: {
        // ...
        'react/react-in-jsx-scope': 'off',
        'react/jsx-uses-react': 'off',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
    },
};
