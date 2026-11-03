import { useState } from "react";

function Profile({ users }) {

  const [showTopper, setShowTopper] = useState(false);

  const toppers = [...users].sort((a, b) => b.marks - a.marks).slice(0,3);

  return (
    <>
      <button onClick={() => setShowTopper(!showTopper)}>
        {showTopper ? "Hide Topper" : "Show Topper"}
      </button>

      {showTopper && (
        <div>
          {toppers.map((topper,index) => (
            <div key={topper.id}>
              <h3>{index + 1}. {topper.name}</h3>
              <p>Position: {index + 1}</p>
              <p>Age: {topper.age}</p>
              <p>City: {topper.city}</p>
              <p>Marks: {topper.marks}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Profile;