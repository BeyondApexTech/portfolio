import React from "react";
import "./LoaderLogo.css";

class LogoLoader extends React.Component {
  render() {
    const theme = this.props.theme;
    return <img src={require(`../../assets/images/Logo.png`)} alt="" />;
  }
}

export default LogoLoader;
