import React, { useEffect, useState } from "react";
import Panginate from "./components/utils";

const url = "https://api.github.com/users/john-smilga/followers?per_page=100";
const url2 = "";

export const useFetch = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const reponse = await fetch(url);
      const result = await reponse.json();

      setData(Panginate(result));

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
