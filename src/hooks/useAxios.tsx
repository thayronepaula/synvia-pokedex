import { useState, useEffect } from "react";
import axios from "axios";

function useAxios<T>(url: string, options?: object) {
  const [data, setData] = useState<T | null>(null);
  useEffect(() => {
    axios.get(url, options).then((res) => {
      if (url.includes("pokemon")) {
        const result = removeDuplicateAndAddId(res.data.results);
        setData(result);
      } else {
        setData(res.data);
      }
    });
  }, []);

  return { data, setData };
}
export default useAxios

function removeDuplicateAndAddId(pokemons: any | null) {
  //return pokemons with ID and not duplicates

  return pokemons
    ?.filter(
      (values, index, array) =>
        array.findIndex((t) => t.national_number === values.national_number) ===
        index
    )
    .map((x, i) => {
      x.id = i;
      return x;
    });
}
