import Axios from "axios";
import React from "react";
const Testing = () => {
  Axios
    .get
    // `https://cors-anywhere.herokuapp.com/http://neowsapp.com/rest/v1/feed?start_date=&detailed=true`
    ()
    .then((response) => {
      console.log(response[0]);
    });
  return (
    <section>
      <p>we are testing.</p>
    </section>
  );
};
export default Testing;
