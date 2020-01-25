import React from "react";
import { PKXSummary } from "./index";
import { action } from "@storybook/addon-actions";
import { withKnobs, boolean } from "@storybook/addon-knobs";

export default {
  title: "PKXSummary",
  decorators: [withKnobs]
};

export const withText = () => (
  <PKXSummary
    pkxId="123456789"
    userId="123456789"
    hasShowMore={boolean("hasShowMore", false)}
    onShowMore={action("clicked")}
  />
);

export const withContainer = () => (
  <div style={{ width: 300 }}>
    <PKXSummary
      pkxId="123456789"
      userId="123456789"
      hasShowMore={boolean("hasShowMore", false)}
      onShowMore={action("clicked")}
    />
  </div>
);
