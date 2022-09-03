module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    tsconfigRootDir: './',
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      'eslint-import-resolver-custom-alias': {
        alias: {
          '@components': './src/components',
          '@containers': './src/containers',
          '@pages': './src/pages',
          '@modules': './src/modules',
          '@hooks': './src/hooks',
          '@images': './src/images',
        },
        extensions: ['.ts', '.tsx'],
      },
    },
  },
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    // 'plugin:jsx-a11y/recommended',
    'plugin:eslint-comments/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  rules: {
    'no-var': 0,
    semi: [2, 'always'],
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'react/prop-types': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'no-unused-vars': 'off',
  },
};
