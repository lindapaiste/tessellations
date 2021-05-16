import { Grid, Theme, Typography, makeStyles } from "@material-ui/core";
import React, { PropsWithChildren } from "react";

const useStyles = makeStyles((theme: Theme) => ({
  section: {
    marginBottom: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    borderBottom: "1px solid lightgray",
  },
  label: {
    width: 75,
  },
  controls: {
    flex: 1,
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      flex: "1 1 46%",
      margin: "2%",
      minWidth: 150,
    },
  },
}));

export const ControlSection = ({
  label,
  children,
}: PropsWithChildren<{ label: string }>): JSX.Element => {
  const classes = useStyles();

  return (
    <Grid container className={classes.section}>
      <Grid item className={classes.label}>
        <Typography>{label}</Typography>
      </Grid>
      <Grid item className={classes.controls}>
        {children}
      </Grid>
    </Grid>
  );
};
