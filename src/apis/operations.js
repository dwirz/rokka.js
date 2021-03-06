const operations = {};

operations.resize = (width, height, options = {}) => {
  options.width = width;
  options.height = height;

  return {
    name: 'resize',
    options
  };
};

operations.rotate = (angle, options = {}) => {
  options.angle = angle;

  return {
    name: 'rotate',
    options
  };
};

operations.dropshadow = (options = {}) => {
  return {
    name: 'dropshadow',
    options
  };
};

operations.trim = (options = {}) => {
  return {
    name: 'trim',
    options
  };
};

operations.crop = (width, height, options = {}) => {
  options.width = width;
  options.height = height;

  return {
    name: 'crop',
    options
  };
};

operations.noop = () => {
  return {
    name: 'noop'
  };
};

/**
 * ### Operations
 *
 * #### Available operations
 *
 * - `rokka.operations.resize(width, height, options={})`
 * - `rokka.operations.rotate(angle, options={})`
 * - `rokka.operations.dropshadow(options={})`
 * - `rokka.operations.trim(options={})`
 * - `rokka.operations.crop(options={})`
 * - `rokka.operations.noop()`
 *
 * Please refer to the
 * [Rokka API documentation](https://rokka.io/documentation/references/operations.html)
 *
 * @module operations
 */
export default (state) => {
  /**
   * Get a list of available stack operations.
   *
   * ```js
   * rokka.operations.list()
   * 	 .then(function(result) {})
   * 	 .catch(function(err) {});
   * ```
   *
   * @return {Promise}
   */
  operations.list = () => {
    return state.request('GET', 'operations', null, null, { noAuthHeaders: true });
  };

  return {
    operations
  };
};
