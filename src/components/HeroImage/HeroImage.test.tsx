import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import HeroImage from "./HeroImage";

describe("HeroImage component", () => {
  test("renders default hero image text", () => {
    render(<HeroImage src="test.jpg" text="Hero" />);
    const overlay = screen.getByText("Hero");
    expect(overlay).toBeVisible();
  });

  test("renders hero image with custom src and text", () => {
    render(<HeroImage src="custom.jpg" text="Custom Hero" />);

    const img = screen.getByAltText("Custom Hero");
    expect(img).toBeVisible();
    expect(img).toHaveAttribute("src", "custom.jpg");

    const overlay = screen.getByText("Custom Hero");
    expect(overlay).toBeVisible();
  });
});
