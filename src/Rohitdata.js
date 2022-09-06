import React from "react";

const Rohitdata = () => {
  const employee = {
    id: 1,
    name: "Alice",
    salary: 100,
  };
  return (
    <div>
      <h1>How To print key and value</h1>
      <div>
        {Object.keys(employee).map((key, index) => {
          return (
            <div key={index}>
              <h2>{key}</h2>

              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Rohitdata;
