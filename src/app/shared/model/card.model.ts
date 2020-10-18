import { Image } from './image.model';

export class Card {
  constructor(
    public image: Image,
    public title: string,
    public description: string,
    public link: string,
    public text: string
  ) {}
}
