module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    // 1. Kullanılmayan değişken hatalarını kapatır (styles, props vb.)
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off',

    // 2. Boş bileşenlerin kendi kendini kapatma zorunluluğunu kaldırır
    'react/self-closing-comp': 'off',

    // 3. Kullanılmayan importları dert etmez
    'unused-imports/no-unused-imports': 'off',

    // 4. Satır içi stil (inline-style) uyarısını kapatır.
    'react-native/no-inline-styles': 'off',
  },
};
