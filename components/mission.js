import React from "react";

const Mission = ({ mission: dataset }) => {
  return (<>
    {dataset && (
      <div key={dataset.id}>
        <div>{dataset.id}</div>
        <div>{dataset.content.tw}</div>
        <div>{dataset.content.en}</div>
        <div>{dataset.slogan.tw}</div>
        <div>{dataset.slogan.en}</div>
      </div>)}
  </>);
};

export default Mission;
