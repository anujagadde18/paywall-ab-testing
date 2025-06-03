import { getUserId } from "./user";

export function getFlag(key: string): boolean {
  if (key === "paywall_copy_b") {
    // Simple 50/50 split based on userId hash
    const userId = getUserId();
    if (!userId) return false;
    const hash = userId.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return hash % 2 === 0; // even hash -> variant B, odd -> variant A
  }
  return false;
}
