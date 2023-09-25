import React, { useRef } from "react";
import Globe from "react-globe.gl";

export function GlobeLayout({ children }) {
  const $globe = useRef();

  return (
    <div>
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
          ref={$globe}
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
          bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
          // enablePointerInteraction={false}
        />
      </div>

      {children}
    </div>
  );
}

export function useGlobeLayout() {
  return {};
}
