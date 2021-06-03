import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Typography,
  Divider,
  TextField,
  Checkbox,
  FormControlLabel
} from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import Invoices from "./invoices";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  title: {
    color: "purple"
  },
  divider: {
    margin: theme.spacing(2.5, 0)
  },
  paper: {
    padding: theme.spacing(2),
    backgroundColor: "#efefef"
  },
  notes: {
    fontStyle: "italic"
  },
  formLabels: {
    paddingTop: theme.spacing(2)
  },

  formTextField: {
    paddingBottom: theme.spacing(2)
  }
}));

export default function CenteredGrid() {
  const classes = useStyles();
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("xs"));
  return (
    <div className={classes.root}>
      <Grid container justify="center">
        <Grid item xs={12}>
          <Typography variant="h4" className={classes.title}>
            VERIFICATION CLOUD
          </Typography>
          <Divider className={classes.divider} />
        </Grid>
        <Grid item xs={12} sm={12} md={10} lg={8}>
          <div className={classes.paper}>
            <Typography>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </Typography>
          </div>

          <Divider className={classes.divider} />

          <Typography gutterBottom className={classes.notes}>
            *Required Fields
          </Typography>
          <Typography gutterBottom>First we need to confirm ...</Typography>

          <Grid container direction="row" spacing={isSmall ? 0 : 3}>
            <Grid item xs={12} sm={6}>
              <Typography className={classes.formLabels} gutterBottom>
                Your full name*
              </Typography>
              <TextField
                className={classes.formTextField}
                name="firstname"
                size="small"
                fullWidth
                placeholder="Enter name"
                type="text"
                value=""
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <Typography className={classes.formLabels} gutterBottom>
                Your job title*
              </Typography>
              <TextField
                className={classes.formTextField}
                name="middlename"
                size="small"
                fullWidth
                placeholder="Enter name"
                type="text"
                value=""
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox name="checkedB" color="primary" />}
                label="I Have authority ...."
              />
            </Grid>
          </Grid>

          <Divider className={classes.divider} />

          <Typography gutterBottom>Review the invoices below</Typography>
          <Invoices />
          <Typography gutterBottom>Select a verification response</Typography>
        </Grid>

        <Grid item xs={12}></Grid>
      </Grid>
    </div>
  );
}
