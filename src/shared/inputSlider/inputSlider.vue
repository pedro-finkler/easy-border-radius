<template>
  <div class="input-slider">
    <input
      type="range"
      :min="min"
      :max="max"
      class="slider"
      v-model="sliderValue"
    />
  </div>
</template>

<script src="./inputSlider.js"></script>
