import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userinfo: {},
    };
    console.log(this.props.name + " Child Constructor");
  }

  async componentDidMount() {
    console.log(this.props.name + " Child ComponentDidMount");
    const data = await fetch(
      "https://api.github.com/users/seshu-yaswanth-2001"
    );
    const json = await data.json();
    this.setState({
      userinfo: json,
    });
    this.timer = setInterval(() => {
      console.log("Interval is called, please clear in unmount");
    }, 1000);
  }

  componentDidUpdate() {
    console.log("Component Didupdate");
  }
  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("Component Willunmount");
  }

  render() {
    console.log(this.props.name + " Child Render");

    return (
      <>
        <h1>name coming from PROPS: {this.props.name}</h1>
        <h2>Profile Page</h2>
        <h2>Name: {this.state.userinfo.name}</h2>
        <h2>User ID: {this.state.userinfo.id}</h2>
      </>
    );
  }
}

export default Profile;
