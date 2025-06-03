// src/hooks/featureFlags.ts

const assignedFlags: Record<string, boolean> = {};

export function getFlag(key: string): boolean {
  if (!(key in assignedFlags)) {
    assignedFlags[key] = Math.random() < 0.5;
    console.log(`Flag "${key}" assigned: ${assignedFlags[key]}`);
  }
  return assignedFlags[key];
}
