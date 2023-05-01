import { useState, useEffect } from "react";

const useCatch = (url, initialValue) => {
  const [data, setData] = useState(initialValue);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cachedData = localStorage.getItem(url);
        if (cachedData) {
          setData(JSON.parse(cachedData));
          setLoading(false);
          console.log('Data retrieved from cache')
        } else {
          const response = await fetch(url);
          const jsonData = await response.json();
          setData(jsonData);
          localStorage.setItem(url, JSON.stringify(jsonData));
          setLoading(false);
          console.log('Data fetched from API')
        }
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, [url]);

  return { loading, data, error };
};

export default useCatch;