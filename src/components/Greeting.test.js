import Greeting from './Greeting';
import { render, screen } from '@testing-library/react';

test("Render Hello World as text", () => {
    // Arrange Part/Section
    render(<Greeting />);

    // Act Part/Section
    // ...

    // Assert
    const helloWorldElement = screen.getByText('Hello World', { exact : false });
    expect(helloWorldElement).toBeInTheDocument();
})