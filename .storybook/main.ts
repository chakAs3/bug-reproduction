import type { StorybookConfig } from "@storybook/vue3-vite";
const {
  mergeConfig
} = require('vite');
const path = require("path");
const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions", "@storybook/addon-mdx-gfm"],
  framework: {
    name: "@storybook/vue3-vite",
    options: {}
  },
  docs: {
    autodocs: "tag"
  },
  staticDirs: ['../public'],
  viteFinal: config => {
    return mergeConfig(config, {
      resolve: {
        alias: {
          '@': path.resolve(path.dirname(__dirname), "src")
        }
      }
    });
  }
};
export default config;