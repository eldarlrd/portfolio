import { type RiotComponent, component } from 'riot';

import Body from '@/body.riot';
import 'modern-normalize/modern-normalize.css';

const mountBody = component(Body as RiotComponent);

mountBody(document.body);

// Easter Egg
console.log('Some believe the fate of our worlds is inflexible. My employers disagree.');
