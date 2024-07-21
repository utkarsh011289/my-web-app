import { describe } from "node:test";
import Home from "../Home/Home";
import { render, screen } from "@testing-library/react";
import { Carousel } from "react-bootstrap";

jest.mock("react-bootstrap/Carousel", ()=>{
    return {
        __esModule: true,
        default: ()=>{
            return <div>Carousel component</div>
        }
    }
})

describe("Home component tests", ()=>{
    test("render correctly", async()=>{
           render(<Home />)
           expect(await screen.getByText("Carousel component")).toBeInTheDocument();
    })
})