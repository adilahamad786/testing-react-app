import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async component", () => {
    test('renders posts if request successed', async () => {
        // own mock function which work like fetch function and resolve overhead of networking request for each testing and also our target is testing app component not fetch function because fetch function is maintain by browser.
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json : async () => [{ id : 'p1', title : "This is first item" }]
        })
        
        render(<Async />);

        const listItemElements = await screen.findAllByRole('listitem');
        expect(listItemElements).not.toHaveLength(0);
    })
})