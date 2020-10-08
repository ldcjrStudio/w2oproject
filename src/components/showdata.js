import React from "react";

const ShowData = (date) => {
  return (
    <div>
      <ul>
        {date.forEach((item) => {
          <li>
            <div>
              <p>{name}</p>
            </div>
          </li>;
        })}
      </ul>
    </div>
  );
};
export default ShowData;
