import React, { useRef, useState } from "react";
import Globe from "react-globe.gl";

export function GlobeLayout({ children }) {
  const globeRef = useRef();

  const [height, setHeight] = useState(1080);

  const [isTop, setIsTop] = useState(true);

  function handleWheel(event) {
    const globe = globeRef.current;

    if (globe) {
      const delta = event.clientY / 100;
      const coords = globe.getCoords(47, 39);

      const lat = coords.latitude - delta * 0.01;

      const rCords = { ...coords, latitude: lat };
      console.log(event);

      // globe.pointOfView({ lat: 47, lng: event.pageY }, 1000);

      // if (isTop) {
      //   globe.scene().translateY(-70);
      //   globe.scene().translateZ(150);
      //   globe.scene().translateX(20);
      //   setIsTop(false);
      // }

      // setHeight(1900);
    }
  }

  // debouncer, throttler on scroll events

  return (
    <div onWheel={handleWheel}>
      <div
        style={{
          position: "fixed",
          width: "100%",
          height: "100vh",
          zIndex: -1,
          top: 0,
          left: 0,
        }}
      >
        <Globe
          width={1920}
          height={height}
          ref={globeRef}
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
          bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
          showAtmosphere
        />
      </div>
      {children}
    </div>
  );
}

export function useGlobeLayout() {
  return {};
}
