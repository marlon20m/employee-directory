// import dependencies
import React from "react";
// import react-testing methods
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
// add custom jest matchers from jest-dom
import "@testing-library/jest-dom/extend-expect";
import Header from "../src/components/Header";

describe("Header", () => {
    let wrapper;
    test("loads and displays Marlon", async () => {
        // Arrange
        const { container, asFragment, debug } = render(
            <Header />
        );
        debug();
        // console.log(container, asFragment, debug())
        // Act - user is not interacting with this
        // Assert
        // For mor on matchers see jest documentation & https://github.com/testing-library/jest-dom
        expect(container).toContainHTML(`<div>Marlon</div>`);
    });
    test("loads and displays greeting", async () => {
        // Arrange
        const { container, asFragment, debug } = render(
            <Math num1={19} operator= "-" num2={341} />
        );
        debug();
        // Act - user is not interacting with this
        // Assert
        // For mor on matchers see jest documentation & https://github.com/testing-library/jest-dom
        expect(container).toContainHTML(`<span>-322</span>`);
    });
});