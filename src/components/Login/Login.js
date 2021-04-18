import React, { useContext } from 'react';
import Navbar from '../Home/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHammer } from '@fortawesome/free-solid-svg-icons';
import './Login.css';

import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { AuthContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

const Login = () => {


    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }

    const [loggedInUser, setLoggedInUser] = useContext(AuthContext);
    const history = useHistory();
    const location = useLocation();

    const {from} = location.state || {from: {pathname: "/"}};


    const setUserToken = () => {

        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
            sessionStorage.setItem('token', idToken);
      }).catch(function(error) {
        // Handle error
      });
        
    }


    const handleLogin = () => {

        console.log('login clicked');
        const provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider)
        .then(result => {
               
            const { displayName, email, photoURL } = result.user;
            const signedInUser = { name: displayName, email, isLoggedIn: true, image:photoURL };
            setUserToken();
            setLoggedInUser(signedInUser);
            history.replace(from); 
        }).catch((error)=>{

            var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
                const newData = {
                    hasError: errorMessage,
                }
                setLoggedInUser(newData);

        });
    }



    return (
        <div>
            <Navbar></Navbar>
            <div id="login-container">

                {/* google Sign in button */}
            <div style={{boxShadow:'10px 10px 20px lightgrey', padding:'20px', width:'300px', display:'flex',alignItems:'center',justifyContent:'center'}}>
                
                <div>
                <h3 style={{textAlign:'center'}} ><FontAwesomeIcon icon={faHammer}></FontAwesomeIcon><span><strong> Car<sup style={{ color: 'crimson' }}> <b>fixer.  </b></sup></strong></span></h3>
                <br></br>
                <h3 style={{textAlign:'center'}}>Login</h3>
               <br></br>
               
                <Button onClick={handleLogin}><FontAwesomeIcon icon={faGoogle} />   &nbsp;&nbsp;Login with google</Button>
                <br /><br />
                </div>
            </div>
            </div>
        </div>
    );
};

export default Login;