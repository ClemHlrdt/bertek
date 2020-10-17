import { Image } from './image.model';
import { Info } from './info.model';

export class MemberCard {
  constructor(public images: Image, public info: Info) {}
}
