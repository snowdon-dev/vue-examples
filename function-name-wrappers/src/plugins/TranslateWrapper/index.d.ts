import VueI18n, { IVueI18n } from "vue-i18n";

declare module "vue/types/vue" {
  interface Vue {
    $translate: typeof VueI18n.prototype.t;
    anotherName: typeof VueI18n.prototype.t;
  }
}
