import React from "react";
import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import Button from "./components/Button";
import { Headline, BodyText } from "./components/Typography";
import { containerStyles } from "./components/styles";

import { getFlag } from "./hooks/featureFlags";
import { track } from "./utils/analytics";

export default function App(): React.ReactElement {
  const isVariantB = getFlag("paywall_copy_b");
  console.log("isVariantB:", isVariantB);

  const headline = isVariantB ? "Unlock AI Study Mode" : "Upgrade your study plan";
  console.log("headline:", headline);

  const variantLabel = isVariantB ? "B" : "A";

  const handleUpgradePress = () => {
    track("paywall_conversion", { variant: variantLabel });
    console.log("Upgrade clicked for variant", variantLabel);
    // upgrade logic here
  };

  return (
    <SafeAreaView style={containerStyles.container}>
      <StatusBar style="auto" />
      <Headline>{headline}</Headline>
      <BodyText>1 200+ flashcards • adaptive quizzes • offline access</BodyText>
      <Button onPress={handleUpgradePress} label="Upgrade" />
    </SafeAreaView>
  );
}
const isVariantB = getFlag("paywall_copy_b");
console.log("isVariantB:", isVariantB);
