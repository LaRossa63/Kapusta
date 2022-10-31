export class GetOutlayAndProfitDTO {
  array;

  constructor(model) {
    this.array = model.map((element) => {
      return {
        id: element._id,
        category: element.category,
        data: element.data,
        description: element.description,
        amount: element.amount,
      };
    });
  }
}

export class AddOutlayAndProfitDTO {
  id;
  category;
  data;
  description;
  amount;

  constructor(model) {
    this.id = model._id;
    this.category = model.category;
    this.data = model.data;
    this.description = model.description;
    this.amount = model.amount;
  }
}
