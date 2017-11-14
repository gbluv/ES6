export const object_inheritance = () =>  {

  class GuitarAmp {
    constructor({ source = "electricity", color = "black", company = 'fender' } = {}){
      Object.assign(this,{source,color, company});
    }
  }

  class BaseAmp extends GuitarAmp{
    constructor(){
      super();
      this.powerCord = 'vinyl';
    }
  }

  let guitarAmp = new GuitarAmp();
  let baseAmp = new BaseAmp();

  console.log(Object.keys(guitarAmp));
  console.log(Object.keys(baseAmp));

};

export default object_inheritance;