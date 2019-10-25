import Vue from 'vue'
import App from './App'


import { Dialog, Col, Row, Icon, Image, Button, Carousel, CarouselItem } from "element-ui";
Vue.use(Dialog);
Vue.use(Col);
Vue.use(Row);
Vue.use(Icon);
Vue.use(Image);
Vue.use(Button);
Vue.use(Carousel);
Vue.use(CarouselItem);

Vue.config.productionTip = false


import "echarts/lib/chart/line";
import "echarts/lib/component/tooltip";

import router from './router'
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
