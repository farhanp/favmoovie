import { useRef, useState } from "react";

// const BASE_URL = "http://www.omdbapi.com/";

const BASE_URL = "/api/search";

const useApiCall = (search) => {
  const [state, setState] = useState({
    data: [],
    loading: false,
    error: null,
  });

  const abortControllerRef = useRef(null);

  const dataFetch = async (value) => {
    // Canceling API request
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    const controller = new AbortController();
    abortControllerRef.current = controller;
    setState((prev) => ({ ...prev, loading: true, error: null }));
    const url = `${BASE_URL}?${search}=${encodeURIComponent(value)}`;
    const options = {
      method: "GET",
      signal: controller.signal,
    };

    try {
      const response = await fetch(url, options);
      if (response.ok) {
        const result = await response.json();
        console.log({ result });
        setState((prev) => ({ ...prev, data: result, loading: false }));
      }
    } catch (error) {
      setState((prev) => ({ ...prev, error: error.message }));
      if (error.name !== "AbortError") {
        setState((prev) => ({ ...prev, error: "Something went wrong" }));
      }
      console.error(error);
    } finally {
      setState((prev) => ({ ...prev, loading: false }));
    }
  };

  return { ...state, dataFetch };
};

export default useApiCall;
