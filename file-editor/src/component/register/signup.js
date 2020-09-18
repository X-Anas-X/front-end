import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../reducers/authentication';
import Form from 'react-bootstrap/Form';

const Signin = (props) => {
  const [name , setName]= useState('');
  const [username , setUsername]= useState('');
  const [password , setPassword]= useState('');
  const [role , setRole]= useState('');
  
      const handleChange = e => {
        setState({...state,})[e.target.name] = e.target.value;
      };
    
      const handleSubmit = e => {
        e.preventDefault();
        props.signup(state.username, state.password, state.role);
        setRedirect(true);
      };

        return (
            <Form>
            <h3>Sign Up</h3>

            <div className="form-group">
                <label>Name:</label>
                <input type="text" className="form-control" placeholder="name" onChange={setName}/>
            </div>

            <div className="form-group">
                <label>Username</label>
                <input type="text" className="form-control" placeholder="name" onChange={setUsername}/>
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" onChange={setPassword}/>
            </div>

            <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
            <p className="forgot-password text-right"> User Already Exists </p>
        </Form>
        );
    
}
const mapStateToProps = (state) => {
    return {
      loggedIn: state.auth.loggedIn,
      user: state.auth.user,
    };
  };
  
  
  const mapDispatchToProps = (dispatch, getState) => ({
    signup: (username, password, email, role) => dispatch(actions.signup(username, password, email, role)),
  });
export default connect(mapStateToProps, mapDispatchToProps)(Signin);