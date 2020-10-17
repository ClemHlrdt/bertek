import { MemberCard } from './member-card.model';

export class Block {
  constructor(public title: string, public members: MemberCard[]) {}
}
