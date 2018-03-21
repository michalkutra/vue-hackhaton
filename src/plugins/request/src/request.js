import axios  from 'axios';
import { camelizeKeys } from 'humps';
import { normalize } from 'normalizr';

/**
 * @param {RequestType} params
 * @returns {Promise<*>}
 * @async
 */
async function Request(params) {
  if (typeof params !== 'object') {
    throw new TypeError('Set "http" property');
  }

  const {
    http,
    schema,
    axiosCustomInstance,
  } = params;

  if (typeof http !== 'object') {
    throw new TypeError('http is necessary of property');
  }

  try {
    let axiosInstance = axios;

    if (typeof axiosCustomInstance !== 'undefined' && axiosCustomInstance !== null) {
      axiosInstance = axiosCustomInstance;
    }

    const response = await axiosInstance(http);
    const camelizeResponse = camelizeKeys(response.data);

    if (typeof schema === 'undefined') {
      return camelizeResponse;
    }

    return Object.assign({}, normalize(camelizeResponse, schema));
  } catch (error) {
    return Promise.reject(error.response.data || error);
  }
}

export default Request;
