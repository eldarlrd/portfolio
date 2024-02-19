import * as riot from 'riot'

import App from '@/app.riot'

const mountApp = riot.component(App)

mountApp(
  document.getElementById('app'),
  { message: 'Hello World', items: [] }
)