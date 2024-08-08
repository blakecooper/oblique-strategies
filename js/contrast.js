function isAcceptableContrast(color1, color2, isLargeText = false) {
    // Helper function to convert decimal color to RGB
    function decimalToRGB(decimal) {
        const r = (decimal >> 16) & 0xFF;
        const g = (decimal >> 8) & 0xFF;
        const b = decimal & 0xFF;

        return { r, g, b };
    }

    // Helper function to calculate luminance of a color
    function getLuminance({ r, g, b }) {
        const [R, G, B] = [r, g, b].map(c => {
            c /= 255;
            return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
        });
        return 0.2126 * R + 0.7152 * G + 0.0722 * B;
    }

    // Helper function to calculate contrast ratio
    function getContrastRatio(luminance1, luminance2) {
        const [L1, L2] = luminance1 > luminance2 ? [luminance1, luminance2] : [luminance2, luminance1];
        return (L1 + 0.05) / (L2 + 0.05);
    }

    color1 = decimalToRGB(color1);
    color2 = decimalToRGB(color2);

    // Calculate luminances
    const luminance1 = getLuminance(color1);
    const luminance2 = getLuminance(color2);
    
    // Calculate contrast ratio
    const contrastRatio = getContrastRatio(luminance1, luminance2);

    // Determine if contrast ratio meets the WCAG guidelines
    const minRatio = isLargeText ? 3 : 4.5;
    return contrastRatio >= minRatio;
}