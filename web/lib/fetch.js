import Config from '@config';
import axios from 'axios';
import Cookies from 'js-cookie';
import Config from '@config';

export default function (config) {
  const oaToken = Cookies.get('token') || Config.mockUser.oaToken;
  const axiosConfig = Object.assign(config, {
    headers: Object.assign({ token: oaToken }, config.headers),
    url: config.url.match(/\:\/\//) ? config.url : `${Config.apiHost}${config.url}`
  })
  return axios(axiosConfig);
}