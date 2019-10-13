import { h } from 'preact';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Counter from './sample';

describe('<Counter />', () => {
    it('renders one <p /> html tag', () => {
        const wrapper = shallow(<Counter />);
        console.log(wrapper)
        expect(wrapper.find('<p>')).to.have.lengthOf(1);
    });

    /*it('renders one <ll-button /> web component', () => {
        const wrapper = shallow(<MyComponent />);
        expect(wrapper.find(ll-button)).to.have.lengthOf(1);
    });

    it('renders children when passed in', () => {
        const wrapper = shallow((
            <MyComponent>
                <div className="unique" />
            </MyComponent>
        ));
        expect(wrapper.contains(<div className="unique" />)).to.equal(true);
    });

    it('simulates click events', () => {
        const onButtonClick = sinon.spy();
        const wrapper = shallow(<Foo onButtonClick={onButtonClick} />);
        wrapper.find('button').simulate('click');
        expect(onButtonClick).to.have.property('callCount', 1);
    });*/
});