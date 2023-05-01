import Image from "next/image";
import { Container, Icon, TextInput } from "./styles";

type InputFiledProps = {
  width?: string;
  placeholder: string;
  type?: string;
  onChange: any;
  value: string;
  children?: any;
};

export default function InputField({
  placeholder,
  type = "text",
  onChange,
  value = "",
  width = "auto",
  children,
}: InputFiledProps) {
  return (
    <Container width={width}>
      <TextInput
        value={value}
        onChange={(e: any) => onChange(e.target.value)}
        placeholder={placeholder}
        type={type}
      />
      <Icon>{children}</Icon>
    </Container>
  );
}
