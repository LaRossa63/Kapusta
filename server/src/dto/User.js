export class UserDto {
  email;
  id;
  isActivated;
  nickName;

  constructor(model) {
    this.id = model._id;
    this.email = model.email;
    this.nickName = model.nickName;
    this.isActivated = model.isActivated;
  }
}
