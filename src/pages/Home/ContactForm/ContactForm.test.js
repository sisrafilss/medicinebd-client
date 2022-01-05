import { configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import ContactForm from "./ContactForm";
import { shallow } from "enzyme";

configure({ adapter: new Adapter() });

describe("Shallow Contact Form", () => {
  it("Object check", () => {
    let wrapper = shallow(<ContactForm />);
    // console.log(wrapper);
    expect(wrapper.exists(".bg-dark")).toEqual(true);
  });
});
