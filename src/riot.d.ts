declare module '*.riot' {
  import { type RiotComponentWrapper } from 'riot';

  const componentWrapper: RiotComponentWrapper;
  export default componentWrapper;
}
