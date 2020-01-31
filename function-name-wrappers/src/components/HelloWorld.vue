<template>
  <div class="hello">
    <h1>{{ $translate("message.hello") }}</h1>
    <h1>{{ $t("message.hello") }}</h1>
    <h1>{{ anotherName("message.hello") }}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {}
</script>
