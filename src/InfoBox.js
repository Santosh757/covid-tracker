import { Card, CardContent, Typography } from "@material-ui/core";
import React from "react";


const InfoBox = ({ title, cases, total }) => {
  return (
    <div>
      <Card className="infoBox">
        <CardContent>
          <Typography className="infoBox-title" color="textSecondary">
            {title}
          </Typography>
          <h2 className="infoBox-cases">{cases}</h2>
          <Typography className="infoBox-total" color="textSecondary">
            Total {total}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default InfoBox;
