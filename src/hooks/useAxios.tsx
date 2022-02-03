import { useState, useEffect } from "react";
import axios from "axios";

function useAxios<T>(url: string, options?: object) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setData(null);
    setError(null);
    axios
      .get(url, options)
      .then((res) => {
        setData(res.data);
      })
      .catch((_err) => {
        setError("An error occurred. Awkward..");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  return { data, loading, error };
}
export default useAxios;
