import React from "react";
import { PKXSprite } from "./index";
import { withKnobs, number } from "@storybook/addon-knobs";

export default {
  title: "PKXSprite",
  decorators: [withKnobs]
};

export const withText = () => <PKXSprite id={number("id", 1)} />;
