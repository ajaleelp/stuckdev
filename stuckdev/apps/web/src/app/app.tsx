import {
  AppBar,
  Button,
  darken,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { NavLink as Link, Redirect, Route, Switch } from 'react-router-dom';
import GetHelp from './views/get-help/get-help';
import HelpGroups from './views/help-groups/help-groups';
import Requests from './views/requests/requests';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  logo: {
    height: theme.spacing(4),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    marginLeft: theme.spacing(1),
    flexGrow: 1,
  },
  navLink: {
    '&.active': {
      backgroundColor: darken(theme.palette.primary.main, 0.4),
    },
  },
}));

export function App() {
  const classes = useStyles();
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <img src="assets/app-icon.png" className={classes.logo} />
          <Typography variant="h6" className={classes.title}>
            Stuckdev
          </Typography>
          <Button
            color="inherit"
            className={classes.navLink}
            component={Link}
            to={'/help-groups'}
          >
            Help Groups
          </Button>
          <Button
            color="inherit"
            className={classes.navLink}
            component={Link}
            to={'/get-help'}
          >
            Get Help
          </Button>
          <Button
            color="inherit"
            className={classes.navLink}
            component={Link}
            to={'/request'}
          >
            Requests
          </Button>
        </Toolbar>
      </AppBar>
      <Switch>
        <Route path="/help-groups" render={() => <HelpGroups />} />
        <Route path="/request" render={() => <Requests />} />
        <Route path="/get-help" render={() => <GetHelp />} />
        <Route render={() => <Redirect to="/help-groups" />} />
      </Switch>
      {/* END: routes */}
    </>
  );
}

export default App;
