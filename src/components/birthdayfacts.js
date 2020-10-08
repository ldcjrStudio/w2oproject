import React, { useState } from "react";
// import ShowData from "./showdata";

const BirthdayFacts = () => {
  const [dob, setDob] = useState("1994-01-26");
  const [birthDate, setBirthDate] = useState("1994-01-26");
  const [loading, setLoading] = useState(false);
  const [neoData, setNeoData] = useState([]);

  // function getNeoData() {
  //   setLoading(true);
  //   fetch(
  //     `https://cors-anywhere.herokuapp.com/http://neowsapp.com/rest/v1/feed?start_date=${birthDate}&detailed=true&api_key=KLHyWA5REIICTEg57ldcYz1BmavA9qfYOa0qiieV`,
  //     {
  //       method: "GET",
  //       headers: {
  //         "access-control-allow-headers":
  //           "Origin, X-Requested-With, Content-Type, Accept",
  //         "access-control-allow-methods": "POST,GET",
  //         "access-control-allow-origin": "*",
  //         "access-control-max-age": "3600",
  //         connection: "keep-alive",
  //         "content-type": "application/json;charset=UTF-8",
  //         date: "Wed, 07 Oct 2020 10:33:39 GMT",
  //         server: "Cowboy",
  //         "transfer-encoding": "chunked",
  //         via: "1.1 vegur",
  //         "x-content-type-options": "nosniff",
  //         "x-xss-protection": "1; mode=block",
  //         //   body: JSON.stringify(),
  //       },
  //     }
  //   )
  //     .then((res) => {
  //       res.json();
  //     })
  //     .then(function (data) {
  //       setNeoData(data);
  //       console.log(data);
  //     })
  //     .catch((error) => console.log(error));
  //   setLoading(false);
  // }

  async function getNeoData(callback) {
    setLoading(true);
    setBirthDate(dob);
    try {
      const response = await fetch(
        `https://cors-anywhere.herokuapp.com/http://neowsapp.com/rest/v1/feed?start_date=${birthDate}&detailed=true&api_key=KLHyWA5REIICTEg57ldcYz1BmavA9qfYOa0qiieV`,
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

      //   console.log(neoData);
      setNeoData(json);
    } catch (error) {
      console.log("There was an error:", error);
    }
    setLoading(false);
    return;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    getNeoData();
    // console.log(neoData);
  };

  const handleChange = (e) => {
    setDob(e.target.value);
    setBirthDate(e.target.value);
  };

  return (
    <section id="facts">
      <div className="submit-dob">
        <h2>Discover more about Near-Earth Object Phenomenon!</h2>
        <h3>
          Submit your DOB below to find details of NEO activity occuring when
          you were born.
        </h3>

        <form onSubmit={handleSubmit}>
          <label>
            DOB: {"  "}
            <input
              placeholder="YYYY-MM-DD"
              type="date"
              value={dob}
              onChange={handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>

      <div className="dob-data">
        {loading ? (
          <div>
            <h3>...Loading</h3>{" "}
          </div>
        ) : (
          <div>
            <p>
              {" "}
              {Object.entries(neoData).map(function (entries, index) {
                console.log(Object.entries(neoData));
                return <p>[entries]</p>;
              })}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default BirthdayFacts;
