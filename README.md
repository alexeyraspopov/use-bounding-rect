# use-bounding-rect

    npm install use-bounding-rect

A tiny React hook to access [DOM Rect][gbcr] of an element dynamically. Uses [`ResizeObserver`][ro]
under the hood to update state.

```jsx
import { useBoundingRect } from "use-bounding-rect";

function Wrapper() {
  let ref = useRef(null);
  let rect = useBoundingRect(ref);
  return (
    <div className="wrapper" ref={ref}>
      {rect != null ? <Content width={rect.width} height={rect.height} /> : null}
    </div>
  );
}
```

[gbcr]: https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
[ro]: https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver
