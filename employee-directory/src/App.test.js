import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import Header from "../src/components/Header"
test("loads and displays Marlon", async () => {
  // Arrange
  const { container, asFragment, debug } = render(
      <Header />
  );
})