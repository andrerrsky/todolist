import { useContext } from "react";
import { ThemeContext } from "styled-components";

const FontStyle = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <style jsx global>{`
      @font-face {
        font-display: "swap";
        font-family: "Product Sans";
        font-style: normal;
        font-weight: ${themeContext.font.weights.regular};
        src: url("./assets/fonts/product-sans-regular.ttf") format("truetype");
      }

      @font-face {
        font-display: "swap";
        font-family: "Product Sans";
        font-style: normal;
        font-weight: ${themeContext.font.weights.bold};
        src: url("./assets/fonts/product-sans-bold.ttf") format("truetype");
      }
    `}</style>
  );
};

export default FontStyle;
