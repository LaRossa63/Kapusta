export class GetOutlayAndProfitDTO {
  array;

  constructor(model) {
    this.array = model.map((element) => {
      return {
        id: element._id,
        categoryId: element.categoryId,
        categoryText: element.categoryText,
        data: element.data,
        description: element.description,
        amount: element.amount,
      };
    });
  }
}

export class AddOutlayAndProfitDTO {
  id;
  categoryId;
  categoryText;
  data;
  description;
  amount;

  constructor(model) {
    this.id = model._id;
    this.categoryId = model.categoryId;
    this.categoryText = model.categoryText;
    this.data = model.data;
    this.description = model.description;
    this.amount = model.amount;
  }
}
