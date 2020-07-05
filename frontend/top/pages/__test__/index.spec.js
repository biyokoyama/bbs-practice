import { shallowMount } from '@vue/test-utils';
import indexPage from '~/top/pages/index.vue'

describe('top/pages/index.vue', () => {
  it('samplespec', () => {
    const wrapper = shallowMount(indexPage, {})
    expect(wrapper.text()).toBe('index.vue');
  });
});
