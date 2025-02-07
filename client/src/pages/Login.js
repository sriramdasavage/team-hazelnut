import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import "../App.scss";
import Button from "@material-ui/core/Button";

const initalState = {
  email: "",
  emailError: "",
  password: "",
  passwordError: ""
};

class LoginPage extends Component {
  state = initalState;

  handleEmailChange = event => {
    this.setState({ email: event.target.value });
  };

  handlePasswordChange = event => {
    this.setState({ password: event.target.value });
  };

  validate = () => {
    let emailError = "";
    var re = /[^@]+@[^.]+\..+/;
    var test = re.test(this.state.email);
    if (!test === true) {
      emailError = "Invalid email";
    }

    if (emailError) {
      this.setState({ emailError });
      return false;
    }

    return true;
  };

  handleSubmit = event => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      this.setState(initalState);
    }
  };

  render() {
    return (
      <div>
        <Grid container spacing={3}>
          <Grid item xs={2}></Grid>
          <Grid item xs={8}>
            <div className="container">
              <div className="infoBox ">
                <form>
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <h1 className="center">LogIn</h1>
                    </Grid>
                    <Grid item xs={12} className="pb-0 pt-0">
                      <p className="mb-0 mt-0">EMAIL ADDRESS</p>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        name="email"
                        id="outlined-email"
                        placeholder="Email"
                        margin="normal"
                        variant="outlined"
                        type="email"
                        value={this.state.email}
                        onChange={this.handleEmailChange}
                        fullWidth
                      />
                      <div style={{ color: "red" }}>
                        {this.state.emailError}
                      </div>
                    </Grid>
                    <Grid item xs={12} className="pb-0 pt-0">
                      <p className="mb-0 mt-0">PASSWORD</p>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        name="password"
                        id="outlined-password"
                        placeholder="Password"
                        margin="normal"
                        variant="outlined"
                        type="password"
                        value={this.state.password}
                        onChange={this.handlePasswordChange}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={8} className="center">
                      <Button
                        variant="contained"
                        onClick={this.handleSubmit}
                        fullWidth
                      >
                        Login
                      </Button>
                    </Grid>
                    <Grid item xs={2}></Grid>

                    <Grid item xs={12} className="center">
                      <p>
                        Don't have an Account? <a href="../signup">Register</a>
                      </p>
                    </Grid>
                  </Grid>
                </form>
              </div>
            </div>
          </Grid>
          <Grid item xs={2}></Grid>
        </Grid>
      </div>
    );
  }
}

export default LoginPage;
