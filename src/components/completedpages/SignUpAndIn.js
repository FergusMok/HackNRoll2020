import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useHistory } from "react-router-dom";
import { signup, backendURL, login } from "../API/LoginHandler";
import Alert from "@material-ui/lab/Alert";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { Collapse } from "@material-ui/core";

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
  alert: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function SignInAndIn({ match }) {
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [confirmPasswordstate, setconfirmPassword] = useState("");
  const [password, setPassword] = useState("");
  const [telegramID, settelegramID] = useState("");
  const [open, setOpen] = useState(false);

  const isSignInPage = () => (match.path === "/signup" ? false : true);
  const history = useHistory();
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
        onInput={(e) => setconfirmPassword(e.target.value)}
      />

      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="Telegram ID"
        label="Telegram ID"
        type="text"
        id="text"
        onInput={(e) => settelegramID(e.target.value)}
      />
    </div>
  );
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(username, telegramID, confirmPasswordstate, password);
    signup(username, telegramID, password, (e) => {
      if (e === true) {
        history.push("/signin");
      }
    });
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    login(
      username,
      password,
      (e) => {
        if (e !== null) {
          sessionStorage.setItem("userInfo", JSON.stringify(e));
          history.push("/main");
        }
      },
      () => setOpen(true)
    );
  };
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
        <form
          className={classes.form}
          onSubmit={(event) =>
            isSignInPage() ? handleLogin(event) : handleSubmit(event)
          }
        >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="User Name"
            name="email"
            autoComplete="email"
            autoFocus
            onInput={(e) => setUsername(e.target.value)}
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
            onInput={(e) => setPassword(e.target.value)}
          />
          {confirmPassword}
          <Collapse in={open}>
            <Alert
              severity="error"
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
            >
              Wrong username and/or password!
            </Alert>
          </Collapse>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {isSignInPage() ? "Log In" : "Register"}
          </Button>
          <Grid container>
            <Grid item>
              <Link to={isSignInPage() ? "/signup" : "/signin"}>
                {isSignInPage()
                  ? "Don't have an account? Sign Up"
                  : "Have an account? Sign in!"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
