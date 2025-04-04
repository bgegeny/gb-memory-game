import React from "react";
import { render } from "@testing-library/react";
import { useInitApp } from "../../src/hooks/useInitApp";
import { useAppDispatch, useAppSelector } from "../../src/redux/hooks";
import { resetCards } from "../../src/redux/slices/deckSlice";

jest.mock("../../src/redux/hooks", () => ({
  useAppDispatch: jest.fn(),
  useAppSelector: jest.fn(),
}));

jest.mock("../../src/redux/slices/deckSlice", () => ({
  resetCards: jest.fn(),
}));

describe("useInitApp", () => {
  const mockDispatch = jest.fn();
  const mockUseAppSelector = useAppSelector as jest.Mock;

  beforeEach(() => {
    jest.clearAllMocks();
    (useAppDispatch as jest.Mock).mockReturnValue(mockDispatch);
  });

  const TestComponent: React.FC = () => {
    useInitApp();
    return null;
  };

  it("should dispatch resetCards with the correct number of pairs", () => {
    const numberOfPairs = 8;
    mockUseAppSelector.mockReturnValue(numberOfPairs);

    render(React.createElement(TestComponent));

    expect(mockDispatch).toHaveBeenCalledWith(resetCards(numberOfPairs));
  });

  it("should not dispatch resetCards if numberOfPairs changes to the same value", () => {
    const numberOfPairs = 8;
    mockUseAppSelector.mockReturnValue(numberOfPairs);

    const { rerender } = render(React.createElement(TestComponent));
    rerender(React.createElement(TestComponent));

    expect(mockDispatch).toHaveBeenCalledTimes(1);
  });
});
