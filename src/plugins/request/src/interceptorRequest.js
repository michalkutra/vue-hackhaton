/**
 * @param {Object} options
 */
const successHandler = (options, response) => {
  const {
    baseUrl,
    storage: {
      name,
      key,
    },
  } = options;

  if (typeof baseUrl !== 'undefined') {
    Object.defineProperty(response, 'baseURL', {
      value: baseUrl,
    });
  }

  if (typeof name !== 'undefined' && typeof key !== 'undefined') {
    const storage = localStorage.getItem(name);

    if (typeof storage !== 'undefined' && storage !== null) {
      const accessToken = JSON.parse(storage)[key];

      if (typeof accessToken !== 'undefined' && accessToken !== null) {
        const currentHeaders = response.headers;

        Object.defineProperty(response, 'headers', {
          value: {
            ...currentHeaders,
            Authorization: `Bearer ${accessToken}`,
          },
        });
      }
    }
  }

  return response;
};

const interceptorsRequest = (options) => [
  successHandler.bind(null, options),
  null,
];

export default interceptorsRequest;
