import web3 from './web3';

import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xAcDc394FF1A1a09374Fcbc62E99D9c9348Bb233c'
);

export default instance;
