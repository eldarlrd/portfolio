import { component } from 'riot';

import 'normalize.css';
import App from '@/app.riot';

const mountApp = component(App);
const app = document.getElementById('app');

if (app) mountApp(app);
