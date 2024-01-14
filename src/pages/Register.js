import { useState, useEffect } from "react";
import { Logo, FormRow } from "../components";
import Wrapper from "../assets/wrappers/RegisterPage";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

function Register() {
  const [values, setValue] = useState(initialState);

  const handleChange = (e) => {
    console.log(e.target);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  const toggleMember = () => {
    setValue({ ...values, isMember: !values.isMember });
  };

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? "Login" : "Register"}</h3>

        {/* name field  */}
        {!values.isMember && (
          <FormRow
            type="text"
            name="name"
            handleChange={handleChange}
            value={values.name}
          ></FormRow>
        )}

        {/* email field  */}
        <FormRow
          type="email"
          name="email"
          handleChange={handleChange}
          value={values.email}
        ></FormRow>

        {/* password field  */}
        <FormRow
          type="password"
          name="password"
          handleChange={handleChange}
          value={values.password}
        ></FormRow>

        <button className="btn btn-block"> submit</button>
        <p>
          {values.isMember ? 'Not a member yet?': 'Already a member?'}
          <button type="button" className="member-btn" onClick={toggleMember}>
          {values.isMember ? 'Register' : 'Login'}
          </button>
        </p>
      </form>
    </Wrapper>
  );
}
export default Register;
