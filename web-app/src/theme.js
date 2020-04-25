import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  mixins: {
    navDrawer: {
      width: 240
    }
  }
});
