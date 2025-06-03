import { v4 as uuidv4 } from "uuid";
import { Platform } from "react-native";
import * as SecureStore from "expo-secure-store";

const KEY = "growthChallengeUserId";
let cached: string | null = null;

export function getUserId(): string {
  if (cached) return cached;

  if (Platform.OS === "web") {
    cached = localStorage.getItem(KEY) ?? uuidv4();
    localStorage.setItem(KEY, cached);
    return cached;
  }

  cached =
    SecureStore.getItemSync(KEY) ??
    (() => {
      const id = uuidv4();
      SecureStore.setItemSync(KEY, id);
      return id;
    })();

  return cached;
} 