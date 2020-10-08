import { useState, useEffect } from "react";

const useFetch = () => {
  const [loading, setLoading] = useState(true);
  const [theData, setTheData] = useState([]);
  const [error, setError] = useState("0");
  const [birthDate] = useState("1994-01-26");
  const [url] = useState(
    `http://neowsapp.com/rest/v1/feed?start_date=${birthDate}&detailed=true`
  );

  useEffect(() => {
    setLoading(true);
    console.log("loadingt ");
    fetch(url, {
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
    })
      .then((res) => res.json())
      .then((data) => {
        setTheData(data);
        setError(null);
        setLoading(false);
        console.log(data);
      })
      .catch((e) => {
        console.warn(e.message);
        setError("Error fetching data. Try again.");
        setLoading(false);
      });
  }, [url]);
  return [loading, theData, error];
};

export default useFetch;
