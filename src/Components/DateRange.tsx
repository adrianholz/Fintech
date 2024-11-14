import React, { useState } from "react";
import DateInput from "./DateInput";

const DateRange = () => {
  const [initial, setInitial] = useState("");
  const [end, setEnd] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <DateInput
        label="Initial Date"
        value={initial}
        onChange={({ target }) => setInitial(target.value)}
      />
      <DateInput
        label="End Date"
        value={end}
        onChange={({ target }) => setEnd(target.value)}
      />
    </form>
  );
};

export default DateRange;
