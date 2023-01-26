import { renderWith } from "@src/utils";
import { screen } from "@testing-library/react";
import Card from "./Card";

describe("Card component", () => {
  it("should render correctly", () => {
    renderWith(<Card />);
    expect(screen.getByTestId("card")).toBeInTheDocument();
  });
});
