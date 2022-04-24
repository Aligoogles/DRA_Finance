import { mount, configure } from "enzyme";
import { render, screen } from '@testing-library/react';
import { act } from "react-dom/test-utils";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import About from "../../pages/about/About";
import { Route } from "react-router-dom"
configure({adapter: new Adapter()}) 

it("renders about page without crashing", () => { 
    mount(<About />); 
  }); 

    it("renders about page subheading", () => { 
      const wrapper = mount(<About />); 
      const welcome = "Meet the Team";
      expect(wrapper.contains(welcome)).toEqual(true); 
    });