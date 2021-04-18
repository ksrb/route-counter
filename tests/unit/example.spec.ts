import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import Counter from "@/components/Counter.vue";

describe("Counter.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(Counter, {
      props: { msg },
    });
    expect(wrapper.text()).to.include(msg);
  });
});
