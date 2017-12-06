export const object_inheritance = () =>  {

  class GuitarAmp {
    constructor({ source = "electricity", color = "black", company = 'fender' } = {}){
      Object.assign(this,{source,color, company});
    }
  }

  /**
   * In this case Guitar Amp is our base class we extend it and add a new property
   * called powerCord. Constructor super will actually mapy extended class's prototype
   * to this class.
   */
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

