import { useState, useEffect } from "react";
import { API_URL, API_KEY } from "../../config";

export const useHomeFetch = () => {
  const [state, setState] = useState({ films: [] });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  //async call, so it can get data when available
  //endpoint - parameter
  const fetchFilms = async (endpoint) => {
    setError(false);
    setLoading(true);

    const isLoadMore = endpoint.search("page");
    //this is executed first, if won't work will go to catch (error)
    try {
      //this is where the data collected in result, we awaiting two times,
      //so first is await the data second await is json parse which is also a async call.
      const result = await (await fetch(endpoint)).json();
      console.log(result);
      //this is where we will be setting the state (with the setter) -
      //don't use state.films cause it will run to infinity loop, instead you use setState and
      //we get prev - previous state as a parameter and then enclose it in () so it's an object
      setState((prev) => ({
        //this is ES6 spread
        ...prev,
        films:
          isLoadMore !== -1
            ? [...prev.films, ...result.results]
            : [...result.results],
        //check if we already have a heroImage with prev. and have shortcurcuit with OR
        heroImage: prev.heroImage || result.results[0],
        currentPage: result.page,
        totalPages: result.total_pages,
      }));
    } catch (error) {
      setError(true);
      console.log(error);
    }
    //here you can use } finally { setLoading} which works the same
    setLoading(false);
  };

  useEffect(() => {
    fetchFilms(`${API_URL}movie/popular?api_key=${API_KEY}`);
  }, []);
  return [{ state, loading, error }, fetchFilms];
};
