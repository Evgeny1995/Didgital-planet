import { useCallback, useEffect, useMemo } from "react";
import { debounce, throttle } from "lodash-es";
import useLatest from "hooks/useLatest";

//useLatest почему то не импортируется(отуствует в экспортируемых именах)

function makeDebouncedHook(debounceFn) {
  return function useDebounce(cb, ms) {
    const latestCb = useLatest(cb);

    const debouncedFn = useMemo(
      () =>
        debounceFn((...args) => {
          latestCb.current(...args);
        }, ms),
      [ms, latestCb]
    );

    useEffect(() => () => debouncedFn.cancel(), [debouncedFn]);
    return debouncedFn;
  };
}

export default makeDebouncedHook;

export const useDebounce = makeDebouncedHook(debounce);
export const useThrottler = makeDebouncedHook(throttle);

export const useStandartDebounce = (cb, ms) =>
  useCallback(debounce(cb, ms), [cb, ms]);
