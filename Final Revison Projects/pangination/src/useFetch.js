import React, { useEffect, useState } from "react";

const url = "https://api.github.com/users/john-smilga/followers?per_page=100";
const url2 = "";

export const useFetch = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const reponse = await fetch(url);
      const result = await reponse.json();

      setData(result);

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return { loading, data };
};
