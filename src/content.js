import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  inputGrid: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function Content() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <p style={{ textAlign: 'left', fontSize: '16', color: 'black', paddingRight: '20%' }}>
              <b>Jacob Casson</b> from <b>Firebear & Me Limited</b> needs you to confirm their
              invoice as valid on the agreed terms and approved for payment Verification token
              : XVDHro4365632lgfdzg
            </p>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} justify="space-between">
          <Paper className={classes.paper}>
            <p style={{ textAlign: 'left', fontWeight: 'bolder', color: 'black' }}>
              <b>
                Please confirm you are the right person to review this invoice
              </b>
            </p>
            <br />
            <Grid container
              direction="row"
              justify="space-between"
              alignItems="center" >
              <Grid item spacing={3}>
                <TextField id="email" style={{ width: '350px' }} fullWidth label="Email" variant="outlined" />
              </Grid>
              <Grid item spacing={3}>
                <TextField id="fullname" style={{ width: '350px' }} fullWidth label="full Name" variant="outlined" />
              </Grid>
              {/* <div item className={classes.inputGrid}> */}
              {/* <Paper className={classes.paper}>xs=12 sm=6</Paper> */}
              <Grid item spacing={3}>
                <TextField id="jobTitle" style={{ width: '350px' }} fullWidth label="Your Job Title" variant="outlined" />
              </Grid>

              {/* </div> */}
            </Grid>
            <Grid container
              direction="row"
              justify="space-between"
              alignItems="center"
              style={{ marginTop: '20px' }}
            >
              <Grid item spacing={3}>
                <Checkbox
                  defaultChecked
                  color="primary"
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                /> <span>I have authority to review and approve this invoice</span>
              </Grid>
              <Grid item spacing={3} style={{ textDecoration: 'underline' }}>
                Or forward to authorized person
              </Grid>

            </Grid>
          </Paper>
        </Grid>
        {/* <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>xs=12 sm=6</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid> */}
      </Grid>
    </div>
  );
}
