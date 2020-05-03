import mergeWith from 'lodash.mergewith';

const mergeArray = (objValue, srcValue) => {
  if (Array.isArray(objValue)) return [...objValue, ...srcValue];
};

// The extra object up front prevents mutations
export const mergeWithArrays = (...objs) => mergeWith({}, ...objs, mergeArray);
