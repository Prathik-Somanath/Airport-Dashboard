import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

export default function CardInfo(props) {
  let useStyles = makeStyles({
    root: {
      width: Number(props.width),
      height: Number(props.height),
    },
  });
  let classes = useStyles();
  console.log(Number(props.width));
  return (
    <div className="card">
      <Card className={classes.root}>
        <CardContent>{props.children}</CardContent>
      </Card>
    </div>
  );
}
