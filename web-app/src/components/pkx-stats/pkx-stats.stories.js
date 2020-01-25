import React from "react";
import { PKXStats } from "./index";
import { withKnobs } from "@storybook/addon-knobs";

export default {
  title: "PKXStats",
  decorators: [withKnobs]
};

export const withText = () => <PKXStats pkxId="123456789" userId="123456789" />;

export const withContainer = () => (
  <div style={{ width: 400 }}>
    <PKXStats pkxId="123456789" userId="123456789" />
  </div>
);
