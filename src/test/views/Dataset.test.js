import { mount, configure } from "enzyme";
import { render, screen } from '@testing-library/react';
import { act } from "react-dom/test-utils";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Dataset from "../../pages/dataset/Dataset";
import { Route } from "react-router-dom"
configure({adapter: new Adapter()}) 

it("renders Dataset page without crashing", () => { 
    mount(<Dataset />); 
  });
  
    it("renders Dataset page", () => { 
      const wrapper = mount(<Dataset />); 
      const welcome = "Forex news around the world";
      expect(wrapper.contains(welcome)).toEqual(true); 
    });

    
    