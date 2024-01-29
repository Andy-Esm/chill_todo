import type { StorybookConfig } from "@storybook/react-webpack5";
import webpackConfig from "../webpack.config";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-addon-react-router-v6",
  ],
  webpackFinal: async (config) => {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        ...webpackConfig({ mode: "development" })?.resolve?.alias,
      };
    }
    if (config.module) {
      config.module.rules = webpackConfig({
        mode: "development",
      })?.module?.rules;
    }
    return config;
  },
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
