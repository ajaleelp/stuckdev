import {
  Button,
  Container,
  Grid,
  makeStyles,
  MenuItem,
  Paper,
  Select,
  TextField,
} from '@material-ui/core';
import React from 'react';

/* eslint-disable-next-line */
export interface GetHelpProps {}

const useGetHelpStyles = makeStyles((theme) => ({
  main: {
    margin: theme.spacing(1),
  },
  form: {
    padding: theme.spacing(2),
  },
}));

export function GetHelp(props: GetHelpProps) {
  const classes = useGetHelpStyles();
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2} className={classes.main}>
        <Grid item xs={12}>
          <Paper className={classes.form}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  margin="normal"
                  label="Topic"
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  margin="normal"
                  variant="outlined"
                  multiline
                  rows="20"
                  rowsMax="25"
                  label="Details"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <Select
                  fullWidth
                  margin="none"
                  label="Help group"
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={10}
                  //onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Group 1</MenuItem>
                  <MenuItem value={20}>Group 2</MenuItem>
                  <MenuItem value={30}>Group 3</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" color="primary">
                  Ask Around
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default GetHelp;
