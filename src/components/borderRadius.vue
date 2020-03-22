<template>
  <div class="background">
    <h1>Easy Border Radius</h1>
    <div
      class="sandbox-box"
      :style="
        `border-top-left-radius: ${borderRadiusTopLeft}%;
        border-top-right-radius: ${borderRadiusTopRight}%;
        border-bottom-left-radius: ${borderRadiusBottomLeft}%;
        border-bottom-right-radius: ${borderRadiusBottomRight}%;`
      "
    />
    <div class="border-radius-sliders">
      <div class="slider-top-left">
        <inputSlider
          :min="0"
          :max="100"
          @changeBorderRadius="changeRadius('borderRadiusTopLeft', $event)"
        />
      </div>
      <inputSlider
        :min="0"
        :max="100"
        @changeBorderRadius="changeRadius('borderRadiusTopRight', $event)"
        class="slider-top-right"
      />
      <inputSlider
        :min="0"
        :max="100"
        @changeBorderRadius="changeRadius('borderRadiusBottomLeft', $event)"
        class="slider-bottom-left"
      />
      <inputSlider
        :min="0"
        :max="100"
        @changeBorderRadius="changeRadius('borderRadiusBottomRight', $event)"
        class="slider-bottom-right"
      />
    </div>
    <div class="click-copy">Click the box below to copy!</div>
    <div class="css-properties-box" @click="copyText">
      <div class="css-text">
        <pre>{{ cssPropertiesText }}</pre>
      </div>
    </div>
  </div>
</template>

<script>
import "./borderRadius.scss";
import inputSlider from "../shared/inputSlider/inputSlider.vue";

export default {
  name: "borderRadius",
  components: {
    inputSlider
  },
  data() {
    return {
      borderRadiusTopLeft: 0,
      borderRadiusTopRight: 0,
      borderRadiusBottomLeft: 0,
      borderRadiusBottomRight: 0
    };
  },
  computed: {
    cssPropertiesText() {
      return `border-top-left-radius: ${this.borderRadiusTopLeft}%;
border-top-right-radius: ${this.borderRadiusTopRight}%;
border-bottom-left-radius: ${this.borderRadiusBottomLeft}%;
border-bottom-right-radius: ${this.borderRadiusBottomRight}%;`;
    }
  },
  methods: {
    copyText() {
      var copyText = document.querySelector(".css-text pre").textContent;
      var temp = document.createElement("textarea");
      document.body.appendChild(temp);
      temp.value = copyText;
      temp.select();
      document.execCommand("copy");
      temp.remove();
    },
    changeRadius(position, value) {
      this[position] = value;
    }
  }
};
</script>
