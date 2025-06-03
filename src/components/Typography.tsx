import React, { ReactNode } from "react";
import { Text, TextStyle } from "react-native";
import { textStyles } from "./styles";

/**
 * Shared props for all typography components
 */
interface TextProps {
  children: ReactNode;
  style?: TextStyle;
}

/**
 * Headline component for primary headings.
 * Used for main titles and important headers.
 */
export const Headline = ({ children, style }: TextProps) => {
  return <Text style={[textStyles.headline, style]}>{children}</Text>;
};

/**
 * BodyText component for regular text content.
 * Used for descriptions, paragraphs, and other body content.
 */
export const BodyText = ({ children, style }: TextProps) => {
  return <Text style={[textStyles.body, style]}>{children}</Text>;
}; 