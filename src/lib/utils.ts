import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
const isBrowser = () => typeof window !== "undefined";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function scrollToTop() {
  if (!isBrowser()) return;
  window.scrollTo({ top: 0, behavior: "smooth" });
}