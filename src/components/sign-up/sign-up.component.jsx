import React from "react";

import FormInput from "../form-input/form-input.component";

import CustomButton from "../custom-button/custom-button.component";

import "./sign-up.styles.scss";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      pasword: "",
      password: "",
      confirmPassword: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ name: "", email: "", password: "", confirmPassword: "" });
  }

  handleChange(event) {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div className="sign-up">
        <h2>I don't have an account</h2>
        <span>Sign up now !</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="name"
            type="name"
            value={this.state.name}
            handleChange={this.handleChange}
            required
            label="Name"
          />
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
            required
            label="Email"
          />

          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
            label="Password"
          />
          <FormInput
            name="confirmPassword"
            type="confirmPassword"
            value={this.state.confirmPassword}
            handleChange={this.handleChange}
            required
            label="Confirm Password"
          />
          <div className="buttons">
            <CustomButton type="submit">Sign Up</CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
