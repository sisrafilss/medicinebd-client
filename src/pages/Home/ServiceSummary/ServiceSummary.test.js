import { configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { shallow } from "enzyme";
import Details from "./Details";

configure({ adapter: new Adapter() });

describe("Shallow Contact Form", () => {
  it("Object check", () => {
    let wrapper = shallow(<Details />);
    // console.log(wrapper);
    expect(wrapper.exists(".text-danger")).toEqual(true);
  });
});
