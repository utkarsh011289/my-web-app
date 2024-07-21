//import { describe } from "node:test";
import { Footer } from "./Footer";
import { render , screen } from "@testing-library/react";

describe("Footer component tests", ()=>{
    test("render correctlly",async ()=>{
        render(<Footer />)
        expect(await screen.getByText(/rights belongs to me/)).toBeInTheDocument();
    })
})