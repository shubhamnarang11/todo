module.exports = {
  roots: ["<rootDir>"],

  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },

  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy"
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",

  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"]
};
