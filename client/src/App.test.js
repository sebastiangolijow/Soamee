import { Link } from 'react-router-dom';
var {expect } = require('chai')
import {Landing} from './Components/Landing/Landing'
import { configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Nav} from './Components/Nav' 
configure({adapter: new Adapter()});

describe(Landing, () => {
  let wrapper = shallow(<Landing/>)
  it('it should be a function', () => {
      expect(Landing).to.be.a('function')
    });
    it('Renderiza un <Link>', () => {
      expect(wrapper.find('Link'))
    })
});


  
describe(Nav, () => {
  let wrapper = shallow(<Nav/>)
  it('it should be a function', () => {
      expect(Home).to.be.a('function')
    });
    it('Deberia renderizar  <Link />', () => {
      expect(wrapper.find(Link)).to.have.length(4);
    });
    it('El primer Link debe cambiar la ruta hacia "/".', () => {
      expect(wrapper.find(Link).at(0).prop('to')).to.equal('/');
    });
    it('El primer Link debe cambiar la ruta hacia "/Authors".', () => {
      expect(wrapper.find(Link).at(1).prop('to')).to.equal('/Authors');
    });
    it('El primer Link debe cambiar la ruta hacia "/CreateA".', () => {
      expect(wrapper.find(Link).at(2).prop('to')).to.equal('/CreateA');
    });
    it('El primer Link debe cambiar la ruta hacia "/CreateB".', () => {
      expect(wrapper.find(Link).at(3).prop('to')).to.equal('/CreateB');
    });
  })


