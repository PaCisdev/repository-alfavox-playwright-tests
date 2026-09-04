import { Console } from 'console';

export function formatTestName(name: string): string {
  return name.trim().replace(/\s+/g, ' ');
}

export function logStep(step: string): void {
  console.log(`[INFO] ${step}`);
}
