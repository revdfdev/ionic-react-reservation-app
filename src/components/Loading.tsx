import React from "react";
import Lottie from "react-lottie";
import "./Container.css";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: require("../assets/loading.json"),
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};

const Loading = () => (
  <div className="container">
    <Lottie
      options={defaultOptions}
      height={400}
      width={400}
    />
  </div>
)

export default Loading;