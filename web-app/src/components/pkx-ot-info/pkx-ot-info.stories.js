import React from "react";
import { PKXOtInfo } from "./index";
import { withKnobs } from "@storybook/addon-knobs";

export default {
  title: "PKXOtInfo",
  decorators: [withKnobs]
};

export const withText = () => (
  <PKXOtInfo pkxId="123456789" userId="123456789" />
);

export const withContainer = () => (
  <div style={{ width: 400 }}>
    <PKXOtInfo pkxId="123456789" userId="123456789" />
  </div>
);
