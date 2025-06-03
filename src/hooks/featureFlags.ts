import { getUserId } from "../user";

export function getFlag(key: string): boolean {
  if (key === "paywall_copy_b") {
    const userId = getUserId();
    if (!userId) {
      // fallback random assignment
      return Math.random() < 0.5;
    }
    // simple deterministic hash based on userId to split 50/50
    const hash = [...userId].reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return hash % 2 === 0;
  }
  return false;
}
