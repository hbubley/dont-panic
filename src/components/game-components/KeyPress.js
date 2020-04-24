import React, { useState, useEffect, useRef } from "react";

export default function KeyPress({ handleTypedChar }) {
  const inputRef = useRef();
  const [value, setValue] = useState("");

  useEffect(() => {
    inputRef.current.focus();
  }, [inputRef]);

  if (value) {
    handleTypedChar(value);
    setValue("");
  }
  return (
    <input
      ref={inputRef}
      value={value}
      onChange={e => setValue(e.target.value)}
    />
  );
};
