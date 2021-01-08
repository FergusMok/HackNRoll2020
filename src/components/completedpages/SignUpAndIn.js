import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignInAndIn() {
  const classes = useStyles();
  const isSignInPage = () => false;
  const confirmPassword = isSignInPage() ? (
    <> </>
  ) : (
    <div>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="Confirm Password"
        label="Confirm Password"
        type="password"
        id="password"
        autoComplete="current-password"
      />

      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="Telegram ID"
        label="Confirm Password"
        type="password"
        id="password"
        autoComplete="current-password"
      />
    </div>
  );

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {isSignInPage() ? "Sign In" : "Sign up for an account!"}
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          {confirmPassword}
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            {isSignInPage() ? "Log In" : "Register"}
          </Button>
          <Grid container>
            <Grid item>
              <Link href="#" variant="body2">
                {isSignInPage() ? "Don't have an account? Sign Up" : "Have an account? Sign in!"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
