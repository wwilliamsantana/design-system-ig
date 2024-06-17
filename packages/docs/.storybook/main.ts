module.exports = {
  "stories": ["../src/pages/**/*.mdx", "../src/stories/**/*.stories.tsx"],

  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],

  "framework": {
    name: "@storybook/react-vite",
    options: {}
  }
}