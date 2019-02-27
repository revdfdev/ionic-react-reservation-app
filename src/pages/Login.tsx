import React, { Component, useState, useEffect, useRef } from 'react'
import {
  IonApp,
  IonInput,
  IonItem,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
} from "@ionic/react";
import "../styles/Login.css"
import Modal from "react-modal";

import { Mutation } from "react-apollo";
import { SIGN_IN_USER } from "../queries"
import { withRouter } from "react-router-dom";
import Success from '../components/Success';
import Loading from '../components/Loading';
import Error from '../components/Error';

function Login() {
  const [usernameText, setUsernameText] = useState("");
  const [passwordText, setPasswordText] = useState("");
  const [isOpen, toggleModal] = useState(false);
  const [isLogin, setIsLoggedIn] = useState(false);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)'
    }
  };

  const handleSubmit = async (e: any, signInUser: any) => {
    e.preventDefault();
    try {
      const data = await signInUser();
      console.log(data)
    } catch (err) {
      console.log(err);
    }

  }

  const handleValidation = () => {

  }

  const handleChange = (e: any) => {
    const { name, value }: { name: String, value: any } = e;
    if (name === "username") {
      setUsernameText(value)
    }

    if (name === "password") {
      setPasswordText(value)
    }
  }

  return (
    <IonApp>
      <Mutation mutation={SIGN_IN_USER} variables={{
        username: usernameText,
        password: passwordText
      }}>
        {
          (signInUser: any, { data, loading, error }) => {
            if (loading) return <Loading />
            if (error) return <Error message={error.message} />
            return (

              <IonGrid>
                <IonRow justify-content-center>
                  <IonCol align-self-center size-md="6" size-lg="5" size-xs="12">
                    <div text-center="true" className="login-header">
                      <h4>Login</h4>
                    </div>
                    <div>
                      <IonItem>
                        <IonInput type="text" placeholder="username" name="username" value={usernameText} onIonChange={handleChange} />
                      </IonItem>
                      <IonItem>
                        <IonInput type="password" placeholder="password" name="password" value={passwordText} onIonChange={handleChange} />
                      </IonItem>
                    </div>
                    <div>
                      <IonButton size="large" expand="block" onClick={(e: any) => handleSubmit(e, signInUser)}>Login</IonButton>
                    </div>
                    <div>
                      <IonButton class="sign-up-button" text-center="true" size="large" expand="block">Sign up</IonButton>
                    </div>
                  </IonCol>
                </IonRow>
              </IonGrid>
            )
          }
        }
      </Mutation>
      <Modal
        isOpen={isOpen}
        onRequestClose={}
        style={customStyles}>

      </Modal>
    </IonApp>
  );

}
export default withRouter(Login);
// export default class Login extends Component {
//   render() {
//     return (
//       <IonApp>
//         <form onSubmit={}>
//           <IonGrid>
//             <IonRow justify-content-center>
//               <IonCol align-self-center size-md="6" size-lg="5" size-xs="12">
//                 <div text-center="true" className="login-header">
//                   <h4>Login</h4>
//                 </div>
//                 <div>
//                   <IonItem>
//                     <IonInput type="text" placeholder="username" />
//                   </IonItem>
//                   <IonItem>
//                     <IonInput type="password" placeholder="password" />
//                   </IonItem>
//                 </div>
//                 <div>
//                   <IonButton size="large" expand="block">Login</IonButton>
//                 </div>
//                 <div>
//                   <IonButton class="sign-up-button" text-center="true" size="large" expand="block">Sign up</IonButton>
//                 </div>
//               </IonCol>
//             </IonRow>
//           </IonGrid>
//         </form>
//       </IonApp>
//     )
//   }
// }
