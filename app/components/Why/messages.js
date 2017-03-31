/*
 * Why Messages
 *
 * This contains all the text for the Why component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  header: {
    id: 'app.components.HomePage.Presentation.header',
    defaultMessage: 'Why Giveth?',
  },
  paragraph1: {
    id: 'app.components.HomePage.Presentation.paragraph1',
    defaultMessage: 'The charitable system is slowly evolving and starting to integrate blockchain technology for its frictionless, global, transparent transactions. But Giveth is leap frogging this slow integration, taking it to the next level, enabling Donors and Change Makers to interact with each other directly in a safe, trustless manner using a foundation of smart contracts to form Decentralized Charitable Organizations.',
  },
  paragraph2: {
    id: 'app.components.HomePage.Presentation.paragraph2',
    defaultMessage: 'Giveth\'s DCOs accounting, international fund distribution, and many other services that are usually done by large charities because of economies of scale.',
  },
  paragraph3: {
    id: 'app.components.HomePage.Presentation.paragraph3',
    defaultMessage: 'At the same time, these DCOs also enable Donors and Change Makers to work together to crowdsource powerful solutions under their own unique governance and incentive structures to bring more impact for their unique set of resources.',
  },
});
