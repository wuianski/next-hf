import React from "react";
import Box from "@mui/material/Box";

const Events = ({ events: dataset }) => {
  !dataset ? null : dataset.sort((a, b) => a.id - b.id);
  return (
    <>
      <Box ml={13} mr={6}>
        {dataset &&
          dataset.map((event) => (
            <div key={event.id}>
              <div>{event.id}</div>
              <div>{event.title.tw}</div>
              <div>{event.title.en}</div>
            </div>
          ))}
      </Box>
    </>
  );
};

export default Events;

/*<div>{event.content.tw}</div>
              <div>{event.content.en}</div> */