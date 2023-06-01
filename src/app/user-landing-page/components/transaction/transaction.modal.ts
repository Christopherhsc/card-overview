export class Transaction {
  constructor(
    public id?: string,
    public title?: string,
    public active?: boolean,
    public price?: number,
    public cardName?: string,
    public Date?: Date
  ) {}
}
