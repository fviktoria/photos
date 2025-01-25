export type ImageSizeMapping = {
  [breakpoint: string]: string; // Breakpoint-specific sizes, e.g., 'md': '100vw'
  fallback: string; // Default size if no breakpoints match
};

const BREAKPOINTS: Record<string, number> = {
  sm: 640, // Small devices (e.g., phones)
  md: 768, // Medium devices (e.g., tablets)
  lg: 1024, // Large devices (e.g., desktops)
  xl: 1280, // Extra large devices (e.g., large desktops)
  "2xl": 1536, // Extra extra large devices
};

/**
 * Transforms a size mapping into a `sizes` attribute string
 * @param sizeMapping - Object containing breakpoint-based sizes and a fallback
 * @returns `sizes` attribute string
 */
export const getImageSizes = (sizeMapping: ImageSizeMapping): string => {
  const entries = Object.entries(sizeMapping).filter(
    ([key]) => key !== "fallback"
  );
  const breakpoints = entries
    .map(([key, size]) => `(max-width: ${BREAKPOINTS[key]}px) ${size}`)
    .join(", ");

  return `${breakpoints}, ${sizeMapping.fallback}`;
};
