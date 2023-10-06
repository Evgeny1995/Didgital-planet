import React from "react";
import { useLayoutEffect, useRef } from "react";

export default function useLatest(value) {
  const valueRef = useRef(value);

  useLayoutEffect(() => {
    valueRef.current = value;
  }, [value]);

  return valueRef;
}
