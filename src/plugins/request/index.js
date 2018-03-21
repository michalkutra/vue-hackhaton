import axios from 'axios';
import Request from './src/request';
import requestInterceptorDocplanner from './src/interceptorRequest';
import responseInterceptorDocplanner from './src/interceptorResponse';

const RequestPlugin = {
  install(Vue, options) {
    const {
      customRequestInterceptor,
      customResponseInterceptor,
      useInterceptors,
      interceptorOptions,
      axiosCustomInstance,
    } = options;

    let axiosInstance = axios;

    if (typeof axiosCustomInstance === 'function') {
      axiosInstance = axiosCustomInstance;
    }

    if (typeof useInterceptors !== 'undefined' && useInterceptors === true) {
      let requestInterceptor = requestInterceptorDocplanner;
      let responseInterceptor = responseInterceptorDocplanner;

      if (typeof customRequestInterceptor !== 'undefined') {
        requestInterceptor = customRequestInterceptor;
      }

      if (typeof customResponseInterceptor !== 'undefined') {
        responseInterceptor = customResponseInterceptor;
      }

      axiosInstance.interceptors.request.use(...requestInterceptor(interceptorOptions));
      axiosInstance.interceptors.response.use(...responseInterceptor);
    }

    Object.defineProperty(Vue.prototype, '$request', {
      value(...args) {
        if (args.length > 0 && typeof args[0].axiosInstance === 'undefined') {
          Object.defineProperty(args[0], 'axiosCustomInstance', {
            value: axiosInstance,
          });
        }

        return Request.apply(this, args);
      },
    });
  },
};

export default RequestPlugin;
