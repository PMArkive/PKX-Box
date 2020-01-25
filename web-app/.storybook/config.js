import { configure, addDecorator } from "@storybook/react";
import "../src/i18n";
import { apolloDecorator } from "./apollo-decorator";

addDecorator(apolloDecorator);

configure(require.context("../src/components", true, /\.stories\.js$/), module);
