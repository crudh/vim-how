import * as React from "react";
import { useSpring, animated } from "react-spring";

export const AnimatedOpacity: React.FC<{
  duration: number;
  children: React.ReactNode;
}> = ({ duration = 500, children }) => {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration },
  });

  return (
    <animated.div style={props} className="p-4 border-gray-900 border-2">
      {children}
    </animated.div>
  );
};
