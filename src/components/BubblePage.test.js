import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import mockFetchColors from '../api/fetchColors'
import BubblePage from "./BubblePage";

jest.mock('../api/fetchColors')

test("Renders BubblePage without errors", () => {
  mockFetchColors.mockResolvedValueOnce(testColor)
  render(<BubblePage/>)
});

const testColor = [{
  color: 'blue',
  code: {hex: '#0000ff'},
  id: 1
}]

test("Fetches data and renders the bubbles on mounting", async () => {
  
  mockFetchColors.mockResolvedValueOnce(testColor)
  render(<BubblePage />)

  const bubbles = await screen.findByTestId('bubble-container')
  expect(bubbles).toBeInTheDocument();
});


//Task List
//1. Setup test for basic rendering of component
//2. Setup test for initial rendering of bubbles on loading