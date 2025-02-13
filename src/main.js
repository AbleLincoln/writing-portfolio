import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import './style.css'

// content
import DinnerParty from './views/DinnerParty.vue'
import TheCrownOfSeeds from './views/TheCrownOfSeeds.vue'
import WhenILostMyWay from './views/WhenILostMyWay.vue'
import OdeToLauren from './views/OdeToLauren.vue'
import SomeQuestions from './views/SomeQuestions.vue'
import AnAltercationOnLincolnBoulevard from './views/AnAltercationOnLincolnBoulevard.vue'
import TheManInTheHighWindow from './views/TheManInTheHighWindow.vue'

const routes = [
  { path: '/dinner-party', component: DinnerParty },
  { path: '/when-i-lost-my-way', component: WhenILostMyWay },
  { path: '/the-crown-of-seeds', component: TheCrownOfSeeds },
  { path: '/ode-to-lauren', component: OdeToLauren },
  { path: '/some-questions', component: SomeQuestions },
  {
    path: '/an-altercation-on-lincoln-boulevard',
    component: AnAltercationOnLincolnBoulevard,
  },
  { path: '/the-man-in-the-high-window', component: TheManInTheHighWindow },
]

export const createApp = ViteSSG(
  // the root component
  App,
  // vue-router options
  { routes },
  // function to have custom setups
  ({ app, router, routes, isClient, initialState }) => {
    // install plugins etc.
  }
)
