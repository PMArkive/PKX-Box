import React from "react";
import { PKXItem } from "./index";
import { withKnobs, number } from "@storybook/addon-knobs";

export default {
  title: "PKXItem",
  decorators: [withKnobs]
};

export const withText = () => <PKXItem id={number("id", 1)} />;
