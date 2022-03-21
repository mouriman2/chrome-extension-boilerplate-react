module.exports = {
    "parser": "@typescript-eslint/parser",
    "extends": [
        "airbnb",
        "plugin:@typescript-eslint/recommended",
        "prettier",
        "prettier/react"
    ],
    "env": {
        "browser": true,
        "es2021": true
    }, 
    "globals": {
        "it": false
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react-hooks", 
        "prettier",
        "@typescript-eslint"
    ],
    "rules": {
    "no-console": "off",
    "react/prop-types": 0,
    "no-unused-expressions": [
        "error", {
        "allowShortCircuit": true,
        "allowTernary": true
        }
    ],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/jsx-filename-extension": [1, {
            "extensions": [".js", ".jsx","tsx","ts"]
    }],
    "prettier/prettier": ["error", {
            "singleQuote": true,
            "bracketSpacing": true,
            "jsxBracketSameLine": true
        }]
    }
};
