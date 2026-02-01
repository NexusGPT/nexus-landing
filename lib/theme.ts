/**
 * Design Tokens - Single source of truth for all design values
 * Used by Tailwind config and can be imported in components for type-safe access
 * 
 * Note: The actual values are defined in lib/theme.js for Tailwind compatibility.
 * This TypeScript file re-exports them with proper types.
 */

// Import from JavaScript file for compatibility
const themeModule = require("./theme.js");
export const theme = themeModule.theme;

// Type export for TypeScript usage
export type Theme = typeof theme;

// Helper function to access nested theme values
export function getThemeValue<T extends keyof Theme>(
  key: T
): Theme[T] {
  return theme[key];
}
