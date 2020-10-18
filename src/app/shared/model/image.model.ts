export class Image {
  private values;
  private _srcSet: string;

  public w400: string;

  constructor(values: any) {
    this.values = values;
    this.w400 = values.w400;
  }

  /*
    Generate srcSet string for each image
  */
  get srcSet() {
    let srcSetString = '';

    Object.entries(this.values).map((image) => {
      const size = image[0].substring(1) + 'w';
      const url = image[1];
      srcSetString += `${url} ${size} ,`;
    });

    return srcSetString;
  }
}
