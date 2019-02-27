import React from "react";
import Lottie from "react-lottie";
import { IonText } from "@ionic/react";
import "./Container.css";


const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: require("../assets/error.json"),
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};

const Error = ({ message }: { message: any }) => (
  <div className="container">
    <Lottie
      options={defaultOptions}
      height={400}
      width={400}
    />
    <IonText>{message}</IonText>
  </div>
)

export default Error;