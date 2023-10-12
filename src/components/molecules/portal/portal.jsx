import React, { useEffect, useMemo } from "react";
import { createPortal } from "react-dom";

const modalRootElement = document.querySelector(".modal");
const Portal = (props) => {
  const { marker } = props;

  const element = useMemo(() => {
    const element = document.createElement("div");
    element.dataset.marker = marker;
    return element;
  }, [marker]);

  useEffect(() => {
    modalRootElement.append(element);

    //  return () => {
    //  modalRootElement.remove(element);
    //};
  });
  console.log(modalRootElement);
  return createPortal(props.children, element);
};

export default Portal;
