import React from "react";

const Events = ({ events, eventsId, eventsTitleTw, eventsTitleDate }) => {
  console.log(events);
  return (
    <div>
      <div>{eventsId}</div>
    </div>
  );
};

export default Events;

/*<div>
    {events.map((e) => (
        <div>{e}</div>
    ))}
</div> */
