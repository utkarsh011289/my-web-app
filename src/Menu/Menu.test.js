import { describe } from "node:test";
import { Menu } from "./Menu";
import { render,screen } from "@testing-library/react";

describe("Menu Component tests",()=>{
    it("render correctly", async ()=> {
        render(<Menu menuItems={[]} />)
       const ulRef=await screen.getByTestId('menu')
       expect(ulRef).toBeInTheDocument();
    })
    
    it("render with props", async()=>{
        render(<Menu menuItems={[
            {
            id:'home',
            path:'home',
            text:'Home'
          }]} />)
        const listItems = await screen.getAllByRole("listitem")
        expect(listItems).toHaveLength(1);
        expect(listItems[0].textContent).toBe("Home")
    })
})