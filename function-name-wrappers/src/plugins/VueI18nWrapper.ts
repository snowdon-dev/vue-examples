import VueI18n from "vue-i18n";
import { VueConstructor } from "vue/types";

const addFunctionToVueBase = (name: string, vueIn: VueConstructor) => {
  vueIn.prototype[name] = function(...args: any[]) {
    return this.$t.apply(this, arguments);
  };
};

// extend the full wrapper
export class TranslateWrapper extends VueI18n {
  static install(vueIn: VueConstructor): void {
    super.install(vueIn);
    addFunctionToVueBase("$translate", vueIn);
  }
}

// install a custom proxy
export const installCustomNameViaPlugin = (vueIn: VueConstructor) => {
  addFunctionToVueBase("anotherName", vueIn);
};
