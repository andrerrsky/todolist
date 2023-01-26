import { render, RenderResult } from "@testing-library/react";
import { RenderWithSettings } from "./renderWith.types";
import { ThemeProvider } from "styled-components";
import defaultTheme from "../../themes";
import React from "react";

const withTheme = (children: React.ReactNode): React.ReactNode => {
  return <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>;
};

const renderWith = (
  children: React.ReactNode,
  settings: RenderWithSettings = { theme: true }
): RenderResult => {
  const themed = settings.theme ? withTheme(children) : children;
  return render(<>{themed}</>);
};

export default renderWith;
