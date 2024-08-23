
interface Props {
  text: string;
  padding?: string;
  color?: string;
}

const InputComponent = (props: Props) => {
  const { text, padding, color } = props;
  return (
    <div>
      <input
        style={{
          padding: "8px 10px",
          borderRadius: 6,
          border: "2px solid hsla(0, 0%, 0%, 0.15)",
          outline: "none",
        }}
        placeholder={text}
      />
    </div>
  );
};

export default InputComponent;
