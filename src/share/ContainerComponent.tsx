import { CSSProperties, ReactNode } from "react";

interface Props {
  children: ReactNode;
  padding?: string;
  bgColor?: string;
  styles?: CSSProperties;
}

const ContainerComponent = (props: Props) => {
  const { children, padding, styles, bgColor } = props;
  return (
    <div
      style={{
        padding: padding ?? "10px 30px",
        backgroundColor: bgColor ?? "transparent",
        ...styles,
      }}
    >
      {children}
    </div>
  );
};

export default ContainerComponent;
