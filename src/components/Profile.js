import { useState } from "react";

const Profile = (props) => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  return (
    <>
      <h2>Function based Component</h2>
      <h2>Name: {props.name}</h2>
      <h2>
        {count1}, {count2}
      </h2>
      <button
        onClick={() => {
          setCount1(count1 + 1);
          setCount2(count2 + 1);
        }}
      >
        Add
      </button>
    </>
  );
};

export default Profile;
