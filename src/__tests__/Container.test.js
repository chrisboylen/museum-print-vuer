import Vue from 'vue';
import { mount } from '@vue/test-utils';
import Container from '../components/Container.vue';

describe('Container', () => {
  it('should match snapshot', () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve({one: true})
    }))
    const wrapper = mount(Container);
    expect(wrapper).toMatchSnapshot();
  });
});