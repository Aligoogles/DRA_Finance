import { mount, configure } from "enzyme";
import { render, screen } from '@testing-library/react';
import { act } from "react-dom/test-utils";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Contact from "../../pages/contact/Contact";
import { Route } from "react-router-dom"
configure({adapter: new Adapter()}) 

it("renders contact page without crashing", () => { 
    mount(<Contact />); 
  });
  
    it("renders form heading to load in contact page", () => { 
      const wrapper = mount(<Contact />); 
      const welcome = "Send us a message and we will get back to you!";
      expect(wrapper.contains(welcome)).toEqual(true); 
    });

    it("renders 'Check it out link' is on Home page", () => { 
    render(<Contact />);
    const linkElement = screen.getByText(/Submit/i); 
    expect(linkElement).toBeInTheDocument(); 
  });