import React, { useRef, useState } from "react";
import Globe from "react-globe.gl";
import earthNight from "../../../assets/img/earthNight.jpg";
import starsSky from "../../../assets/nightSky.png";
import { useDebounce } from "@/hooks/useDebounceThrottle";
import {
  useStandartDebounce,
  useThrottler,
} from "../../../hooks/useDebounceThrottle";

export function GlobeLayout({ children }) {
  const globeRef = useRef();

  const [height, setHeight] = useState(1080);

  const [isTop, setIsTop] = useState(true);

  function handleWheel(event) {
    const globe = globeRef.current;
    // const useThrottler = makeDebouncedHook(throttle);
    // const globeOption = useThrottler();

    console.log("reload");

    if (globe) {
      const delta = event.clientY / 100;
      // const coords = globe.getCoords(47, 39);
      // const lat = coords.latitude - delta * 0.01;
      // const rCords = { ...coords, latitude: lat };
      // console.log(event);
      // globe.controls().autoRotate = true;
      // globe.controls().autoRotateSpeed = 0.2;
      // globe.objectRotation({ X: "100", Y: "0", Z: "0" });
      // globe.pointOfView({ lat: 47, lng: event.pageY }, 1000);
      // {
      //   event.map((e) => console.log(++number));
    }
    if (isTop) {
      // console.log(event.pageY);
      globe.scene().translateY(-70);
      globe.scene().translateZ(150);
      globe.scene().translateX(50);

      globe.controls().autoRotate = true;
      globe.controls().autoRotateSpeed = 2;

      setTimeout(() => {
        globe.controls().autoRotate = false;
      }, 500);

      setIsTop(false);
    }
  }

  const handleWheelDebounced = useDebounce(handleWheel, 1000);
  const handleWheelThrottled = useThrottler(handleWheel, 300);
  const hsw = useStandartDebounce(handleWheel, 1000);

  return (
    <div
      onWheel={hsw}
      // onWheel={handleWheelDebounced}
      // onWheel={handleWheel}
    >
      <div
        style={{
          position: "fixed",
          width: "100%",
          height: "100vh",
          zIndex: -1,
          top: 0,
          left: 0,
          opacity: 1,
        }}
      >
        <Globe
          width={1920}
          height={height}
          ref={globeRef}
          globeImageUrl={earthNight}
          bumpImageUrl={
            "//unpkg.com/three-globe@2.18.3/example/img/night-sky.png"
          }
          backgroundImageUrl={starsSky}
          htmlTransitionDuration={5000}
        />
      </div>
      {children}
    </div>
  );
}

export function useGlobeLayout() {
  return {};
}
