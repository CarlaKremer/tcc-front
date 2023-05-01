import styled from "styled-components";

interface Props {
  placeholder: string;
  type?: string;
  onChange: any;
  value: string;
  width?: string;
}
export const Container = styled.div<any>`
  width: auto;
  height: 56px;
  border-radius: 8px;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
  background: #282A36;
  input {
    position: relative;
  }
  input[type="date"]::-webkit-calendar-picker-indicator {
    background-position: left;
    background-size: 0px;
    cursor: pointer;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    width: auto;
  }
`;

export const TextInput = styled.input`
  flex: 1 0;
  min-width: 50px;
  min-height: 25px;
  font-size: inherit;
  background-color: transparent;
  padding-left: 5px;
  border: 0;
  color: #fafafa;
  &:focus {
    outline: none;
  }
  &::placeholder {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: 0.06em;
    color: #cccccc;
  }
`;

