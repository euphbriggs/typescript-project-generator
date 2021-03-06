const writeFile = require('../utils/writeFile')

module.exports = async () => {
  const data = {
    eslintContent: `module.exports = {
  extends: [
    'eslint:recommended',
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/recommended',
    'plugin:typescript-sort-keys/recommended',
    'prettier',
    'prettier/@typescript-eslint'
  ],
  parser       : '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      modules: true
    },
    ecmaVersion: 6,
    project    : './tsconfig.json',
    sourceType : 'module'
  },
  plugins: ['@typescript-eslint', 'typescript-sort-keys', 'sort-keys-fix'],
  rules  : {
    '@typescript-eslint/camelcase'        : 'off',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'default',
        format  : ['camelCase']
      },
      {
        selector: 'variable',
        format  : ['camelCase', 'PascalCase', 'UPPER_CASE']
      },
      {
        selector         : 'parameter',
        format           : ['camelCase'],
        leadingUnderscore: 'allow'
      },
      {
        selector         : 'memberLike',
        modifiers        : ['private'],
        format           : ['camelCase'],
        leadingUnderscore: 'require'
      },
      {
        selector: 'typeLike',
        format  : ['PascalCase']
      }
    ],
    '@typescript-eslint/semi'          : ['error', 'never'],
    'arrow-parens'                     : ['error', 'as-needed'],
    'comma-dangle'                     : ['error', 'never'],
    curly                              : ['error', 'multi'],
    'eol-last'                         : ['error', 'always'],
    'import/no-extraneous-dependencies': [
      'error', 
      {
        'devDependencies': true
      }
    ],
    'import/prefer-default-export': 'off',
    'key-spacing'                 : [2, { align: 'colon' }],
    'keyword-spacing'             : ['error', { after: true, before: true }],
    'lines-between-class-members' : [
      'error',
      'always',
      {
        exceptAfterSingleLine: true
      }
    ],
    'max-len': [
      'error',
      {
        code                  : 80,
        ignoreComments        : true,
        ignoreRegExpLiterals  : true,
        ignoreTemplateLiterals: true,
        ignoreTrailingComments: true,
        ignoreStrings         : true,
        ignoreUrls            : true
      }
    ],
    'newline-before-return'      : 'error',
    'no-extra-parens'            : 'error',
    'no-console'                 : 'off',
    'no-param-reassign'          : 'off',
    'no-plusplus'                : 'off',
    'no-trailing-spaces'         : 'error',
    'no-underscore-dangle'       : [
      'error',
      {
        'allowAfterThis'      : true,
        'enforceInMethodNames': false 
      }
    ],
    'object-curly-spacing'       : ['error', 'always'],
    'prefer-const'               : 'error',
    radix                        : ['error', 'as-needed'],
    semi                         : [2, 'never'],
    'sort-keys'                  : 'error',
    'sort-keys-fix/sort-keys-fix': 'warn',
    'space-before-function-paren': [
      'error',
      {
        anonymous : 'always',
        named     : 'always',
        asyncArrow: 'always'
      }
    ]
  }
}
`,
    eslintFile: '.eslintrc.js',
    eslintIgnoreContent: `/dist
.eslintrc.js
webpack.config.js
`,
    eslintIgnoreFile: '.eslintignore'
  }

  await Promise.all([
    writeFile(data.eslintFile, data.eslintContent),
    writeFile(data.eslintIgnoreFile, data.eslintIgnoreContent)
  ])
}
