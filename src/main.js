import Vue from "vue";
import App from "./App.vue";
import { VueEmotion } from "@egoist/vue-emotion";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faLink,
  faExternalLinkAlt,
  faEnvelopeSquare,
  faFile,
  faMobileAlt,
  faCheck,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

Vue.use(VueEmotion);

library.add(faLink);
library.add(faExternalLinkAlt);
library.add(faEnvelopeSquare);
library.add(faFile);
library.add(faMobileAlt);
library.add(faCheck);
library.add(faTimes);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
