import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Create from "./components/Create";

describe("Create Component", () => {
  it("should render without errors", () => {
    const { getByLabelText, getByText } = render(<Create />);
    expect(getByLabelText("NFT")).toBeInTheDocument();
    expect(getByLabelText("Price")).toBeInTheDocument();
    expect(getByLabelText("Status")).toBeInTheDocument();
    expect(getByText("Submit")).toBeInTheDocument();
  });

  it("should update the state when input values change", () => {
    const { getByLabelText } = render(<Create />);
    const inputNFT = getByLabelText("NFT");
    const inputPrice = getByLabelText("Price");
    const selectStatus = getByLabelText("Status");

    fireEvent.change(inputNFT, { target: { value: "My NFT" } });
    fireEvent.change(inputPrice, { target: { value: "10.99" } });
    fireEvent.change(selectStatus, { target: { value: "sold" } });

    expect(inputNFT.value).toEqual("SFT");
    expect(inputPrice.value).toEqual("15");
    expect(selectStatus.value).toEqual("sold");
  });
});
