import { Button } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { addRandomLayer, layer } from "../../state/slice";
import { useDispatch, useSelector } from "../../state/store";
import { BackgroundControls } from "./BackgroundControls";
import { PatternLayerControls } from "./PatternLayerControls";

const useStyles = makeStyles({
  buttonWrapper: {
    marginBottom: "2rem",
    display: "flex",
    flexDirection: "column",
  },
  button: {
    alignSelf: "center",
  },
});

export const EditorControls = (): JSX.Element => {
  const layerIds = useSelector(layer.selectIds);
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <>
      <BackgroundControls />
      {layerIds.map((id) => (
        <PatternLayerControls id={id} key={id} />
      ))}
      <div className={classes.buttonWrapper}>
        <Button
          className={classes.button}
          variant="outlined"
          onClick={() => dispatch(addRandomLayer())}
        >
          Add Layer
        </Button>
      </div>
    </>
  );
};
