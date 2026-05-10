/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { Platform } from 'react-native';

const tintColorDark = '#d4af37'; // Golden
const backgroundDark = '#0d0d0d'; // Deep black
const surfaceDark = '#1a1a1a'; // Card surface

export const Colors = {
  light: {
    text: '#f0f0f0',
    background: backgroundDark,
    tint: tintColorDark,
    icon: '#888',
    tabIconDefault: '#888',
    tabIconSelected: tintColorDark,
    surface: surfaceDark,
    accent: '#b8860b',
  },
  dark: {
    text: '#f0f0f0',
    background: backgroundDark,
    tint: tintColorDark,
    icon: '#888',
    tabIconDefault: '#888',
    tabIconSelected: tintColorDark,
    surface: surfaceDark,
    accent: '#b8860b',
  },
};

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: 'system-ui',
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: 'ui-serif',
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: 'ui-rounded',
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});
