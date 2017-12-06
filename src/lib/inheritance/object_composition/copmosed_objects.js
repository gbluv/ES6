
const distortion = {distortion: 1};
const volume = {volume: 1};
const cabinet = {cabinet: 'maple'};

export const BaseAmp = (options = {}) =>{
  return Object.assign({},options,volume);
};


export const GuitarAmp = (options = {}) => {
  return Object.assign({},options,cabinet,distortion);
};


