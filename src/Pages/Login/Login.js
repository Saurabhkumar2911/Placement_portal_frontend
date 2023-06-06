import React, { useState, useContext } from "react";
import client from "../../Utils/CONNECTION";
import { useHistory } from "react-router-dom";
import { SetAuthContext } from "../../App";
import swal from "sweetalert";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { TextFieldCustom } from "./Login.style";
import Cookies from "universal-cookie";
import img3 from "../../Assets/Images/back.jpg";

const cookies = new Cookies();

function Login(props) {
  const classes = useStyles();

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const login = useContext(SetAuthContext);

  const onChangeInput = (setI, val) => {
    setI(val);
  };

  const onSubmit = async () => {
    console.log(id, password);
    if (!id || !password) {
      swal("Fill the Form");
      return;
    }

    try {
      const data = await client.post("/auth/login", {
        id: id,
        password: password,
      });

      cookies.set("token", data.data.token, { path: "/" });
      login(true);
      history.push("/");
      console.log(data);
    } catch (err) {
      swal("Admin User Id or Password wrong");
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${img3})`,
        minHeight: `100vh`,
        backgroundSize: `cover`,
      }}
    >
      <Container
        style={{
          border: "1px solid black",
          borderRadius: "15px",
          left: "50%",
          position: "absolute",
          top: "50%",
          background: "transparent",
          // backgroundColor: "#fff",
          backgroundImage: "linear-gradient(to top, #fddb92 0%, #d1fdff 100%)",
          textAlign: "center",
          width: "400px",
          height: "500px",
          boxSizing: "border-box",
          padding: "10px 30px",
          transform: "translate(-50%,-50%)",
        }}
        component="main"
        maxWidth="xs"
      >
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign In
          </Typography>
          <form className={classes.form} noValidate>
            <TextFieldCustom
              variant="outlined"
              margin="normal"
              required
              fullWidth
              onChange={(e) => {
                onChangeInput(setId, e.target.value);
              }}
              label="Admin Id"
              autoComplete="Admin Id"
              autoFocus
            />
            <TextFieldCustom
              variant="outlined"
              margin="normal"
              required
              fullWidth
              onChange={(e) => {
                onChangeInput(setPassword, e.target.value);
              }}
              label="Password"
              type="password"
              autoComplete="current-password"
            />

            <Button
              style={{ padding: "1rem 0" }}
              onClick={() => {
                onSubmit();
              }}
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Log In
            </Button>
          </form>
        </div>
        <Box mt={8}></Box>
      </Container>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "black",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "black",
    "&:hover": {
      backgroundColor: "#424242",
    },
  },
  blackTextField: {
    backgroundColor: "#424242",
  },
}));

export default Login;
