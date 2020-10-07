import React, { useState } from "react";
// import ShowData from "./showdata";

const BirthdayFacts = () => {
  const [dob, setDob] = useState("1994-01-26");
  const [birthDate, setBirthDate] = useState("1994-01-26");
  //   const [loading, setLoading] = useState(false);
  const [neoData, setNeoData] = useState([]);

  async function getNeoData() {
    setBirthDate(dob);
    try {
      const response = await fetch(
        `https://cors-anywhere.herokuapp.com/http://neowsapp.com/rest/v1/feed?start_date=${birthDate}&detailed=true`,
        {
          method: "GET",
          headers: {
            "access-control-allow-headers":
              "Origin, X-Requested-With, Content-Type, Accept",
            "access-control-allow-methods": "POST,GET",
            "access-control-allow-origin": "*",
            "access-control-max-age": "3600",
            connection: "keep-alive",
            "content-type": "application/json;charset=UTF-8",
            date: "Wed, 07 Oct 2020 10:33:39 GMT",
            server: "Cowboy",
            "transfer-encoding": "chunked",
            via: "1.1 vegur",
            "x-content-type-options": "nosniff",
            "x-xss-protection": "1; mode=block",
          },
        }
      );
      const json = await response.json();
      setNeoData(json);
      console.log(neoData);
    } catch (error) {
      console.log("There was an error:", error);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    getNeoData();
  };

  const handleChange = (e) => {
    setDob(e.target.value);
    setBirthDate(e.target.value);
  };

  return (
    <section id="facts">
      <h2>
        Submit your date of birthday to discover Near-Earth Objects phenomenon
        since you've been born!
      </h2>

      <form onSubmit={handleSubmit}>
        <label>
          DOB
          <input
            placeholder="YYYY-MM-DD"
            type="date"
            value={dob}
            onChange={handleChange}
          />
        </label>

        <input type="submit" value="Submit" />
      </form>

      {/* {loading ? (
        <div>...Loading</div>
      ) : (
        <div>
          {neoData.near_earth_objects.map((dates) => (
            <ShowData {...dates} />
          ))}
        </div>
      )} */}
      {/* //   <ShowData {...neoData} />} */}
    </section>
  );
};

export default BirthdayFacts;
