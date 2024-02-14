import Popup from "./Popup.js";
export default class PopupWithConfirm extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupForm = this._popupElement.querySelector(".modal__form");
    this._button = this._popupElement.querySelector(".modal__button");
  }
  confirmDelete(confirm) {
    this._handleFormSubmit = confirm;
  }
  setEventListeners() {
    this._popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit();
    });
    super.setEventListeners();
  }
}
