import React, { FC } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
  section: {
    marginTop: "2rem",
  },
  tiles: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  heading: {
    textAlign: "center",
  },
});

type GroupProps = {
  title: string;
  subtitle?: string;
};

export const Group: FC<GroupProps> = ({ title, subtitle, children }) => {
  const classes = useStyles();
  return (
    <section className={classes.section}>
      <Typography variant="h2" className={classes.heading}>
        {title}
      </Typography>
      {subtitle ? (
        <Typography variant="h3" className={classes.heading}>
          {subtitle}
        </Typography>
      ) : null}
      <div className={classes.tiles}>{children}</div>
    </section>
  );
};
