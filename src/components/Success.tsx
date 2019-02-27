import React from "react";
import Lottie from "react-lottie";
import { IonText } from "@ionic/react";


const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: require("../assets/success.json"),
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};

const Success = ({ message }: { message: any }) => (
  <div className="container">
    <Lottie
      options={defaultOptions}
      height={400}
      width={400}
    />
    <IonText>{message}</IonText>
  </div>
)

export default Success;