import { Card } from './card.model';

export class Block {
  constructor(public title: string, public members: Card[]) {}
}
