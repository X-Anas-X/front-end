import React , { useEffect }from 'react';
import { connect } from 'react-redux';
import Show from '../showCondition/show';

const Auth = (props) =>{
  useEffect(() => {}, []);


  let render = false;

  try {
    render = props.loggedIn && (
      props.capability ?
        props.user.role.includes(props.capability)
        : true
    );
  } catch (e) {
    console.warn('Not Authorized!');
  }

  return (
    <Show condition={ render }>
      {props.children}
    </Show>
  );
 
};
const mapStateToProps = (state) => {
  console.log('state------>',state);
  return { 
    loggedIn: state.auth.loggedIn,
    user:  state.auth.user ,
  };
};
  
export default connect(mapStateToProps)(Auth);