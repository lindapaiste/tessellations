import { Paper, Theme } from "@material-ui/core";
import React, { FC } from "react";
import { makeStyles } from "@material-ui/core/styles";

interface Props {
  padding: number;
}

const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    margin: theme.spacing(4),
    padding: (props: Props) => theme.spacing(props.padding),
  },
}));

export const Section: FC<Props> = ({ children, ...props }) => {
  const classes = useStyles(props);

  return <Paper className={classes.paper}>{children}</Paper>;
};
