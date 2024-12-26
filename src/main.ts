import { component } from 'riot';
import 'modern-normalize';

import Body from '@/body.riot';

const mountBody = component(Body);

mountBody(document.body);

// Easter Egg
console.log(
  'Some believe the fate of our worlds is inflexible. My employers disagree.'
);
