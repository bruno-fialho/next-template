import { render, screen } from "@testing-library/react";
import Home from "~/app/(home)/page";

test("Home Screen", () => {
  render(<Home />);
  expect(
    screen.getByRole("heading", { level: 1, name: "Next emplate" }),
  ).toBeDefined();
});
