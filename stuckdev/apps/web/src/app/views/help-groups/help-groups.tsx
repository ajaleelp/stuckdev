import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  makeStyles,
  TextField,
  Typography,
} from '@material-ui/core';
import { Add, Delete } from '@material-ui/icons';
import { Autocomplete } from '@material-ui/lab';
import React from 'react';

export interface SingleHelpGroupProps {}
export interface HelpGroupsProps {}

const useSingleHelpGroupStyles = makeStyles((theme) => ({
  emailList: {
    maxHeight: '250px',
    overflowY: 'auto',
  },
  actions: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));
const users = [
  {
    title: 'John doe',
    value: 1,
  },
  {
    title: 'John doe2',
    value: 1,
  },
  {
    title: 'Jane doe',
    value: 1,
  },
  {
    title: 'Xavier Bard',
    value: 1,
  },
];
function SingleHelpGroup(props: SingleHelpGroupProps) {
  const classes = useSingleHelpGroupStyles();
  return (
    <Grid item xs={4}>
      <Card>
        <CardHeader title="Group name" />
        <CardContent>
          <Grid container>
            <Grid item xs={10}>
              <Autocomplete
                multiple
                id="tags-standard"
                options={users}
                getOptionLabel={(option) => option.title}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="standard"
                    label="Add users"
                    placeholder="Start typing email"
                  />
                )}
              />
            </Grid>
            <Grid item xs={1}>
              <IconButton aria-label="add" color="primary">
                <Add />
              </IconButton>
            </Grid>
          </Grid>
          <br />
          <Typography>Users</Typography>
          <List dense className={classes.emailList}>
            <UserEmailItem />
            <UserEmailItem />
            <UserEmailItem />
          </List>
        </CardContent>
        <CardActions className={classes.actions}>
          <Button variant="text" color="primary">
            Request help
          </Button>

          <Button variant="text" color="default">
            Delete
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
export interface UserEmailItemProps {}
function UserEmailItem(props: UserEmailItemProps) {
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar color="primary">JD</Avatar>
      </ListItemAvatar>
      <ListItemText primary="John Dee" secondary={'jdoe@single.com'} />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="delete">
          <Delete />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}
const useHelpGroupStyles = makeStyles((theme) => ({
  main: {
    margin: theme.spacing(1),
  },
}));
export function HelpGroups(props: HelpGroupsProps) {
  const classes = useHelpGroupStyles();
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2} className={classes.main}>
        <SingleHelpGroup />
        <SingleHelpGroup />
        <SingleHelpGroup />
        <SingleHelpGroup />
        <SingleHelpGroup />
      </Grid>
    </Container>
  );
}

export default HelpGroups;
