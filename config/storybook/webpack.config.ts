import webpack from "webpack";
import path from "path";
import { BuildPaths } from "../build/types/config";
import { buildCssLoader } from "../build/loaders/buildCssLoader";
import { RuleSetRule } from "webpack/types";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: "",
    html: "",
    entry: "",
    src: path.resolve(__dirname, "..", "..", "src"),
  };
  config.resolve!.modules!.push(paths.src);
  config.resolve!.extensions!.push(".ts", ".tsx");

  config.module!.rules = (config.module!.rules as RuleSetRule[]).map((rule) => {
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i };
    }
    return rule;
  });

  config.module!.rules.push({
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  });
  config.module!.rules.push(buildCssLoader(true));

  config.plugins!.push(
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(true),
    })
  );

  return config;
};
