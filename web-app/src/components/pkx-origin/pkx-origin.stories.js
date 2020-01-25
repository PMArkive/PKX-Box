import React from "react";
import { PKXOrigin } from "./index";
import { withKnobs } from "@storybook/addon-knobs";

export default {
  title: "PKXOrigin",
  decorators: [withKnobs]
};

export const withText = () => (
  <PKXOrigin pkxId="123456789" userId="123456789" />
);

export const withContainer = () => (
  <div style={{ width: 400 }}>
    <PKXOrigin pkxId="123456789" userId="123456789" />
  </div>
);
