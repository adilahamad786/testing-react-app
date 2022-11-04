import Greeting from './Greeting';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

describe("Greeting component", () => { // create similar testing group.
    test('Render "Hello World" as text', () => {
        // Arrange Part/Section
        render(<Greeting />);

        // Act Part/Section
        // ...

        // Assert
        const helloWorldElement = screen.getByText('Hello World', { exact : false });
        expect(helloWorldElement).toBeInTheDocument();
    });

    test('renders "good to see you" if button was NOT clicked', () => {
        // Arrange Part/Section
        render(<Greeting />);

        // Act Part/Section
        // ...

        // Assert
        const outputElement = screen.getByText('good to see you', { exact : false });
        expect(outputElement).toBeInTheDocument();
    });

    test('renders "Change!" if button was clicked', () => {
        // Arrange Part/Section
        render(<Greeting />);

        // Act Part/Section
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement)

        // Assert
        const outputElement = screen.getByText("Change!");
        expect(outputElement).toBeInTheDocument()
    })
});