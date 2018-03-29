import React from "react";

export default function displayData(config) {
  const { dataSet, render, loading, error, loadingMessage, errorMessage } = config;

  if (error) {
    return <h1>{errorMessage || "An error has occurred"}</h1>;
  } else if (loading) {
    return <h1>{loadingMessage || "Loading..."}</h1>;
  } else {
    return dataSet.map(render);
  }
}
