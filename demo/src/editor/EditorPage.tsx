import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  PassedState,
  addRandomLayer,
  layer,
  load,
  setBackgroundColor,
} from "../state/slice";
import { useDispatch, useSelector } from "../state/store";
import { EditableTile } from "./controls/EditableTile";
import { randomColor } from "../util/random";

/**
 * Order of state resolution:
 *
 * 1) Look for a state passed through the `state` property of the link when navigating.
 *
 * 2) If there is already a pattern in the state then use that.
 *
 * 3) Otherwise, create an editor with a randomly-generated pattern containing one layer.
 * Want to allow the user to remove all layers, so only do the adding one time.
 */
export const EditorPage = (): JSX.Element => {
  const { state } = useLocation<PassedState | undefined>();

  const [didSetup, setDidSetup] = useState(false);

  const layerCount = useSelector(layer.selectTotal);

  const dispatch = useDispatch();

  // console.log(state, didSetup, layerCount);

  useEffect(() => {
    // TODO: does state ever change after this component is mounted?
    if (didSetup) {
      return;
    }
    if (state) {
      dispatch(load(state));
      setDidSetup(true);
    } else if (layerCount === 0) {
      dispatch(addRandomLayer());
      dispatch(setBackgroundColor(randomColor()));
      setDidSetup(true);
    }
  }, [state, layerCount, didSetup, dispatch]);

  return <EditableTile />;
};
