module.exports = {
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  moduleNameMapper: {
    '\\.(css|less|scss|sss)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/tests/__mocks__/file.js',
    '\\.(svg)$': '<rootDir>/tests/__mocks__/component.js',
  },
  moduleDirectories: [
    '<rootDir>/src',
    'node_modules',
  ],
  setupFiles: ['./jest.setup.js',],
};