import classes from '*.module.css';
import {
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
  makeStyles,
  Paper,
  Tab,
  Typography,
} from '@material-ui/core';
import { TabContext, TabList, TabPanel } from '@material-ui/lab';
import React from 'react';

/* eslint-disable-next-line */
export interface RequestsProps {}

const useRequestItemStyles = makeStyles((theme) => ({
  cardRoot: {
    margin: theme.spacing(1),
  },
}));
function RequestItem() {
  const classes = useRequestItemStyles();
  return (
    <Card variant="outlined" className={classes.cardRoot}>
      <CardHeader
        title="Need help with some ruby issue"
        subheader="2 days ago"
      ></CardHeader>
      <CardContent>
        <Typography color="primary">HGID:34534534534</Typography>
        <Typography color="error">Pending</Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          I was minding my own business coding but then I took an arrow to the
          knee. Please help me.
        </Typography>
      </CardContent>
    </Card>
  );
}
const useRequestStyles = makeStyles((theme) => ({
  main: {
    margin: theme.spacing(1),
  },
  requestList: {
    maxHeight: '80vh',
    overflowY: 'auto',
  },
  root: {
    display: 'flex',
    height: 'auto',
    maxHeight: '80vh',
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));
function a11yProps(index: any) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}
export function Requests(props: RequestsProps) {
  const classes = useRequestStyles();
  const [value, setValue] = React.useState<string>('1');

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth="lg">
      <Grid container spacing={2} className={classes.main}>
        <Grid item xs={12}>
          <Paper>
            <div className={classes.root}>
              <TabContext value={value}>
                <TabList
                  className={classes.tabs}
                  onChange={handleChange}
                  aria-label="simple tabs example"
                  orientation="vertical"
                >
                  <Tab label="Sent" value="1" />
                  <Tab label="Received" value="2" />
                </TabList>

                <TabPanel value="1" className={classes.requestList}>
                  <RequestItem />
                  <RequestItem />
                  <RequestItem />
                </TabPanel>
                <TabPanel value="2" className={classes.requestList}>
                  <RequestItem />
                  <RequestItem />
                  <RequestItem />
                  <RequestItem />
                  <RequestItem />
                </TabPanel>
              </TabContext>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Requests;
