import { useState, useLayoutEffect } from "react";

export function useBoundingRect(ref) {
  let [rect, setRect] = useState(null);

  useLayoutEffect(() => {
    let target = ref.current;
    if (target == null) return;
    setRect(target.getBoundingClientRect());
    let observer = new ResizeObserver(() => {
      let newRect = target.getBoundingClientRect();
      setRect((rect) => (equals(rect, newRect) ? rect : newRect));
    });
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return rect;
}

function equals(a, b) {
  if (a == null || b == null) return false;
  for (let key in a) if (a[key] !== b[key]) return false;
  return true;
}
