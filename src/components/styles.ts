import { StyleSheet } from "react-native";
import { COLORS } from "../constants/colors";
import { SPACING, FONT_SIZES, MARGINS } from "../constants/spacing";

export const containerStyles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center", 
    padding: SPACING.CONTAINER_PADDING 
  }
});

export const buttonStyles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.PRIMARY,
    paddingVertical: SPACING.BASE * 1.5,
    paddingHorizontal: SPACING.BASE * 5,
    borderRadius: SPACING.BASE
  },
  buttonText: { 
    color: COLORS.WHITE, 
    fontSize: FONT_SIZES.BODY, 
    fontWeight: "600" 
  }
});

export const textStyles = StyleSheet.create({
  headline: { 
    fontSize: FONT_SIZES.HEADLINE, 
    fontWeight: "700", 
    textAlign: "center", 
    marginBottom: MARGINS.SMALL 
  },
  body: { 
    fontSize: FONT_SIZES.BODY, 
    textAlign: "center", 
    marginBottom: MARGINS.MEDIUM 
  }
}); 