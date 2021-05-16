import { AppBar, Container, Tab, Tabs } from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";
import { makeStyles, Theme } from "@material-ui/core/styles";
import React, { FC } from "react";
import { PAGES } from "./pages";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  offset: theme.mixins.toolbar,
  link: {
    textDecoration: "none",
  },
}));
/**
 * Note: the tab "value" is used only for highlighting the current tab.
 * The actual navigation is done with react-router.
 */
export const NavigationTabs: FC = ({ children }) => {
  const classes = useStyles();
  const { pathname } = useLocation();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="default">
        <Tabs value={pathname} indicatorColor="primary" textColor="primary">
          {PAGES.map(({ path, title }) => (
            <Tab
              label={
                <Link to={path} className={classes.link}>
                  {title}
                </Link>
              }
              value={path}
              key={path}
            />
          ))}
        </Tabs>
      </AppBar>
      <Tabs />
      <Container className={classes.offset}>
        <>{children}</>
      </Container>
    </div>
  );
};
