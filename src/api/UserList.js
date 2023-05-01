import { useState, useEffect } from "react";

const useErrorHandling = (url, ref, initialValue) => {
  const [data, setData] = useState(initialValue);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error(`Failed to fetch data: ${res.status}`);
        }
        const resJson = await res.json();
        if (isMounted) {
          setData(resJson);
          setError(null);
        }
      } catch (err) {
        if (isMounted) {
          setData(initialValue);
          setError(err.message);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    if (ref.current) {
      fetchData().catch((err) => {
        console.error(err);
        setError("Failed to fetch data");
        setLoading(false);
      });
    }

    return () => {
      isMounted = false;
    };
  }, [url, ref, initialValue]);

  return { loading, data, error };
};
export default useErrorHandling;