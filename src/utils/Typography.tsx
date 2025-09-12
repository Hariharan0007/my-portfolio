import { colors } from "./Constants";

export const typography = {
  // Font families
  fontFamily: {
    primary: '"Orbitron", "Exo 2", "Rajdhani", "Roboto Mono", monospace',
    secondary: '"Exo 2", "Rajdhani", "Roboto", sans-serif',
    mono: '"Roboto Mono", "Fira Code", "Consolas", monospace',
  },

  // Font sizes
  fontSize: {
    xs: "0.75rem", // 12px
    sm: "0.875rem", // 14px
    base: "1rem", // 16px
    lg: "1.125rem", // 18px
    xl: "1.25rem", // 20px
    "2xl": "1.5rem", // 24px
    "3xl": "1.875rem", // 30px
    "4xl": "2.25rem", // 36px
    "5xl": "3rem", // 48px
    "6xl": "3.75rem", // 60px
    "7xl": "4.5rem", // 72px
    "8xl": "6rem", // 96px
    "9xl": "8rem", // 128px
  },

  // Font weights
  fontWeight: {
    light: "300",
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
    extrabold: "800",
    black: "900",
  },

  // Line heights
  lineHeight: {
    tight: "1.25",
    snug: "1.375",
    normal: "1.5",
    relaxed: "1.625",
    loose: "2",
  },

  // Text colors
  textColor: {
    primary: colors.cyberpunk_text,
    secondary: colors.cyberpunk_text_secondary,
    accent: colors.cyberpunk_grid,
    silver: colors.cyberpunk_silver,
    cyan: colors.cyberpunk_cyan,
    electric: colors.cyberpunk_electric,
  },

  // Text shadows for glow effects
  textShadow: {
    glow: `0 0 10px ${colors.cyberpunk_glow}`,
    glowStrong: `0 0 20px ${colors.cyberpunk_glow}, 0 0 30px ${colors.cyberpunk_glow}`,
    glowBlue: `0 0 10px ${colors.cyberpunk_cyan}`,
    glowSilver: `0 0 10px ${colors.cyberpunk_silver}`,
  },

  // Letter spacing
  letterSpacing: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0em",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em",
  },
};

// Predefined text styles
export const textStyles = {
  // Headings
  h1: {
    fontFamily: typography.fontFamily.primary,
    fontSize: typography.fontSize["6xl"],
    fontWeight: typography.fontWeight.bold,
    lineHeight: typography.lineHeight.tight,
    color: typography.textColor.primary,
    textShadow: typography.textShadow.glowStrong,
    letterSpacing: typography.letterSpacing.wide,
  },

  h2: {
    fontFamily: typography.fontFamily.primary,
    fontSize: typography.fontSize["5xl"],
    fontWeight: typography.fontWeight.semibold,
    lineHeight: typography.lineHeight.tight,
    color: typography.textColor.primary,
    textShadow: typography.textShadow.glow,
    letterSpacing: typography.letterSpacing.wide,
  },

  h3: {
    fontFamily: typography.fontFamily.primary,
    fontSize: typography.fontSize["4xl"],
    fontWeight: typography.fontWeight.medium,
    lineHeight: typography.lineHeight.snug,
    color: typography.textColor.primary,
    textShadow: typography.textShadow.glow,
    letterSpacing: typography.letterSpacing.normal,
  },

  h4: {
    fontFamily: typography.fontFamily.primary,
    fontSize: typography.fontSize["3xl"],
    fontWeight: typography.fontWeight.medium,
    lineHeight: typography.lineHeight.snug,
    color: typography.textColor.primary,
    textShadow: typography.textShadow.glow,
    letterSpacing: typography.letterSpacing.normal,
  },

  // Body text
  body: {
    fontFamily: typography.fontFamily.secondary,
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.normal,
    lineHeight: typography.lineHeight.relaxed,
    color: typography.textColor.secondary,
  },

  bodyLarge: {
    fontFamily: typography.fontFamily.secondary,
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.normal,
    lineHeight: typography.lineHeight.relaxed,
    color: typography.textColor.secondary,
  },

  // Special text
  accent: {
    fontFamily: typography.fontFamily.primary,
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.semibold,
    lineHeight: typography.lineHeight.normal,
    color: typography.textColor.accent,
    textShadow: typography.textShadow.glowBlue,
    letterSpacing: typography.letterSpacing.wide,
  },

  code: {
    fontFamily: typography.fontFamily.mono,
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.normal,
    lineHeight: typography.lineHeight.normal,
    color: typography.textColor.cyan,
    textShadow: typography.textShadow.glowBlue,
    letterSpacing: typography.letterSpacing.normal,
  },

  // Navigation
  nav: {
    fontFamily: typography.fontFamily.primary,
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.medium,
    lineHeight: typography.lineHeight.normal,
    color: typography.textColor.primary,
    textShadow: typography.textShadow.glow,
    letterSpacing: typography.letterSpacing.wide,
  },

  // Buttons
  button: {
    fontFamily: typography.fontFamily.primary,
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.semibold,
    lineHeight: typography.lineHeight.normal,
    color: typography.textColor.primary,
    textShadow: typography.textShadow.glow,
    letterSpacing: typography.letterSpacing.wide,
  },
};
