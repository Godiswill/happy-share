module.exports = {
    extends: [
        'next/core-web-vitals', // next strict 模式
        'plugin:@typescript-eslint/recommended', // ts eslint
        'plugin:prettier/recommended', // prettier format eslint
    ],
    plugins: ['@typescript-eslint', 'prettier'],
    rules: {
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/no-unused-vars': 'error',
        'prettier/prettier': 'error',
    },
    // ignorePatterns: ['!.lintstagedrc.js', '.prettierrc.js', 'next.config.js'],
};
