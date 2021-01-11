import { DetailedHTMLProps, HTMLAttributes, useEffect, useState } from "react";

export type AppearAnimationProps = {
  fromClassName: string;
  toClassName: string;
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export const AppearAnimation: React.FC<AppearAnimationProps> = ({
  className,
  fromClassName,
  toClassName,
  children,
  ...rest
}) => {
  const [initial, setInitial] = useState(true);

  useEffect(() => {
    setInitial(false);
  }, []);

  return (
    <div
      className={`${className} ${initial ? fromClassName : toClassName}`}
      {...rest}
    >
      {children}
    </div>
  );
};
