import LazyLoadedImage from "./LazyLoadedImage.vue";
import ImageSpinner from "./ImageSpinner.vue";
import { action } from "@storybook/addon-actions";

export default {
  component: LazyLoadedImage,
  title: "LazyLoadedImage",
};

const Template = (args) => ({
  components: { LazyLoadedImage, ImageSpinner },
  setup() {
    return {
      args,
    };
  },
  template: '<LazyLoadedImage v-bind="args"/>',
});

export const Default = Template.bind({});
