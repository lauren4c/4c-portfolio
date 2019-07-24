import Typography from "typography";

const typography = new Typography({
  title: "Lauren Forcey - Creative Product Manager",
  baseFontSize: "18px",
  baseLineHeight: 1.5,
  headerFontFamily: [
    "Bree Serif",
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Helvetica",
    "Arial",
    "sans-serif",
    "Apple Color Emoji",
    "Segoe UI Emoji",
    "Segoe UI Symbol"
  ],
  bodyFontFamily: [
    "Heebo",
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Helvetica",
    "Arial",
    "sans-serif",
    "Apple Color Emoji",
    "Segoe UI Emoji",
    "Segoe UI Symbol"
  ],
  googleFonts: [
    {
      name: "Bree Serif",
      styles: ["400"]
    },
    {
      name: "Heebo",
      styles: ["400"]
    }
  ],
  scaleRatio: 3.998,
  headerWeight: 700,
  overrideStyles: () => ({
    img: {
      marginBottom: 0
    }
  })
});

export default typography;
