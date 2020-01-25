import React from "react";
import { PKXMoves } from "./index";
import { withKnobs } from "@storybook/addon-knobs";

export default {
  title: "PKXMoves",
  decorators: [withKnobs]
};

export const withText = () => <PKXMoves pkxId="123456789" userId="123456789" />;

export const withContainer = () => (
  <div style={{ width: 400 }}>
    <PKXMoves pkxId="123456789" userId="123456789" />
  </div>
);
