import web3 from './web3';

import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x6F18b6c224747c81258EFB1edE4E4Ff82E69a500'
);

export default instance;
