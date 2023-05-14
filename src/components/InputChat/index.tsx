import { Container, TextInput } from "./styles";

type InputFiledProps = {
  placeholder: string;
  type?: string;
  onChange: any;
  onKeyDown: any;
  value: string;
  width?: string;
};

export default function InputChat({
  placeholder,
  type = "text",
  onChange,
  value,
  width,
  onKeyDown,
}: InputFiledProps) {
  return (
    <Container width={width}>
      <TextInput
        value={value}
        onChange={(e: any) => onChange(e.target.value)}
        placeholder={placeholder}
        type={type}
        onKeyDown={onKeyDown}
      />
    </Container>
  );
}
