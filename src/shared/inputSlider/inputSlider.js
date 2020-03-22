import "./inputSlider.scss";

export default {
  name: "inputSlider",
  props: {
    max: {
      type: Number,
      default: 100
    },
    min: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      sliderValue: Math.floor(Math.random() * 100)
    };
  },
  created() {
    this.$emit("changeBorderRadius", this.sliderValue);
  },
  watch: {
    sliderValue() {
      this.$emit("changeBorderRadius", this.sliderValue);
    }
  }
};
