import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { buttonStyles } from "./styles";

/**
 * Button component for primary actions.
 * Renders a touchable button with customizable label text.
 */
interface ButtonProps {
  onPress: () => void;
  label: string;
}

const Button = ({ onPress, label }: ButtonProps) => {
  return (
    <TouchableOpacity style={buttonStyles.button} onPress={onPress}>
      <Text style={buttonStyles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button; 