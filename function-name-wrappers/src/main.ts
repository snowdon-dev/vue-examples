import Vue from "vue";
import App from "./App.vue";

import {
  TranslateWrapper,
  installCustomNameViaPlugin
} from "./plugins/VueI18nWrapper";

var messages = {
  en: {
    message: {
      hello: "hello world"
    }
  },
  ja: {
    message: {
      hello: "こんにちは、世界"
    }
  }
};

Vue.use(TranslateWrapper);
Vue.use(installCustomNameViaPlugin);

var i18n = new TranslateWrapper({
  locale: "ja",
  messages: messages
});

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  i18n
}).$mount("#app");
