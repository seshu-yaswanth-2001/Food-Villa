import React from "react";
import ProfileClass from "./ProfileClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }
  componentDidMount() {
    console.log("Parent ComponentDidMount");
  }
  render() {
    console.log("Parent Render");

    return (
      <>
        <h1>About page</h1>
        <ProfileClass name="First" />
      </>
    );
  }
}

export default About;
