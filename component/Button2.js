import { Button as button } from "@material-ui/core";
import styled from "styled-components";

const StyledButton = styled(button)`
  width: ${(props) => props.width};
  font-size: 0.9rem;
  background-color: ${(props) => {
    if (props.color === "primary") {
      return "red";
    }

    return props.bgcolor;
  }} !important;
  color: ${(props) => {
    if (props.color === "primary") {
      return "white";
    }
    return props.color;
  }} !important;
  margin-bottom: 0.5rem !important;
  }
`;

export const Button2 = (props) => {
  return <StyledButton {...props} />;
};
