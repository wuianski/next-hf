import React from "react";

const Events = ({ events: dataset }) => {
  return (<>
    {dataset && dataset.map((event) => (
      <div key={event.id}>
        <div>{event.id}</div>
        <div>{event.title.tw}</div>
        <div>{event.title.en}</div>
        <div>{event.content.tw}</div>
        <div>{event.content.en}</div>
      </div>
    ))}
  </>);
};

export default Events;