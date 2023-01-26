import { screen } from "@testing-library/react";
import renderWith from "./renderWith";

describe("renderWith util", () => {
  it("should render themed component correctly", () => {
    renderWith(
      <div data-testid="test">
        <p>Test</p>
      </div>
    );
    expect(screen.getByTestId("test")).toBeInTheDocument();
  });

  it("should render default component correctly", () => {
    renderWith(
      <div data-testid="test">
        <p>Test</p>
      </div>,
      { theme: false }
    );
    expect(screen.getByTestId("test")).toBeInTheDocument();
  });
});
