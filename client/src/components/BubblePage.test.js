import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";
const newColors = [
  { code: { hex: "#f0f8ff" }, color: "aliceblue", id: 1 },
  { code: { hex: "#99ddbc" }, color: "limegreen", id: 2 },
];
test("Fetches data and renders the bubbles", () => {
  // Finish this test
  mockFetchBubbles.mockResolvedValue(newColors);
  render(<BubblePage />);

  const bubbles = screen.findByText(/bubble/i);
  expect(await bubbles).toBeInTheDocument();
});
