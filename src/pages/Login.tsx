import React, { Component } from 'react'
import {
  IonApp,
  IonPage,
  IonLabel,
  IonTitle,
  IonInput,
  IonIcon,
  IonToolbar,
  IonToggle,
  IonText,
  IonHeader,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardTitle,
  IonContent,
  IonList,
  IonItem,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
} from "@ionic/react";
import "../styles/Login.css"

export default class Home extends Component {
  render() {
    return (
      <IonApp>
        <IonGrid>
          <IonRow justify-content-center>
            <IonCol align-self-center size-md="6" size-lg="5" size-xs="12">
              <div text-center className="login-header">
                <h4>Login</h4>
              </div>
              <div>
                <IonItem>
                  <IonInput type="text" placeholder="username" />
                </IonItem>
                <IonItem>
                  <IonInput type="text" placeholder="password" />
                </IonItem>
              </div>
              <div>
                <IonButton size="large" expand="block">Login</IonButton>
              </div>
              <div>
                <IonButton class="sign-up-button" size="large" expand="block">Sign up</IonButton>
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonApp>
    )
  }
}
