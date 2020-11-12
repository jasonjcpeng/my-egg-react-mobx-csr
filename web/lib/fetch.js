import Config from '@config';
import axios from 'axios'

export default function (config) {
  const axiosConfig = Object.assign(config, { url: config.url.match(/\:\/\//) ? config.url : `${Config.apiHost}${config.url}` })
  return axios(axiosConfig);
}