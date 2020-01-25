import React from "react";
import { TitleCard } from "./index";
import { withKnobs } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

export default {
  title: "TitleCard",
  decorators: [withKnobs]
};

export const withTitle = () => <TitleCard title="Title!" />;

export const withChildren = () => (
  <TitleCard title="Title!">
    <Typography variant="body2">Content body</Typography>
  </TitleCard>
);

export const withAction = () => {
  const cardAction = (
    <Button size="small" onClick={action("Clicked!")}>
      Click me!
    </Button>
  );
  return (
    <TitleCard title="Title!" cardActions={cardAction}>
      <Typography variant="body2">Content body</Typography>
    </TitleCard>
  );
};
