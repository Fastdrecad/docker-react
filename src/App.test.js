import { render, screen } from "@testing-library/react";
import App from "./App";
// However, for your specific test, you don't need act at all:
test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
