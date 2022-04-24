import { mount, configure } from "enzyme";
import { render, screen } from '@testing-library/react';
import { act } from "react-dom/test-utils";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import App from "../../App";
import { Route } from "react-router-dom"
configure({adapter: new Adapter()}) 


it("renders Home page without crashing", () => { 
  mount(<App />); 
}); 
  it("renders Home page header", () => { 
    const wrapper = mount(<App />); 
    const welcome = "Who is DRA_Finance";
    expect(wrapper.contains(welcome)).toEqual(true); 
  });

  



