module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 2018,
  },
  plugins:[
    'unicorn',
    'import',
    'jest'
  ],
  rules: {
    indent: ['error', 'tab'],
    'max-len': ['error', {
      code: 150
    }],
    'no-tabs': 0,
    'sort-imports': 'error',
    'no-console': 'error',
    'no-eval': 'error',
    'no-unreachable': 'error',
    'no-new-require': 'error',
    'handle-callback-err': 2,
    'no-var': 'error',
    'import/newline-after-import': ['error', {
      'count': 2
    }],
    'import/no-dynamic-require': 'error',
    'import/no-cycle': 'error',
    'unicorn/catch-error-name': ["error", {
      'name': 'error'
    }],
    'unicorn/throw-new-error': 'error',
    'unicorn/prefer-type-error': 'error',
    'unicorn/error-message': 'error',
    'unicorn/filename-case': ['error', {
      'case': 'kebabCase'
    }],
    'unicorn/no-keyword-prefix': ['error',
      {
        'onlyCamelCase': false
      }
    ],
    'jest/lowercase-name': [
      'error', {
        'ignore': ['describe', 'test']
      }
    ],
    'jest/no-disabled-tests': 'error',
    'jest/prefer-spy-on': 'error',
    'jest/no-test-prefixes': 'error',
    'jest/no-mocks-import': 'error',
    'jest/no-jest-import': 'error',
    'jest/no-commented-out-tests': 'error',
    'jest/no-test-return-statement': 'error',
  }
};











