import { useState, useEffect } from "react";

export default function App() {
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [canMove, setCanMove] = useState(true);

  useEffect(() => {
    function handleMove(e) {
      console.log(e.clientX, e.clientY);

      console.log(canMove);

      if (canMove) {
        setPosition({
          ...position,
          x: e.clientX,
          y: e.clientY,
        });
      }
    }

    window.addEventListener("pointermove", handleMove);
    // removing the old event listener
    return () => window.removeEventListener("pointermove", handleMove);
  }, [canMove]);

  return (
    <div onClick={() => setCanMove(!canMove)} className="container">
      <h1>Click to {canMove ? "Stop Following" : "Follow"} Cursor</h1>
      <div
        style={{
          position: "absolute",
          backgroundColor: "blue",
          borderRadius: "50%",
          opacity: 0.6,
          transform: `translate(${position.x}px, ${position.y}px)`,
          pointerEvents: "none",
          left: -20,
          top: -20,
          width: 40,
          height: 40,
        }}
      />
    </div>
  );
}
