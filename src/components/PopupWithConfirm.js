import Popup from "./Popup.js";
export default class PopupWithConfirm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._popupForm = this._popupElement.querySelector(".modal__form");
    this._handleFormSubmit = handleFormSubmit;
    this._button = this._popupElement.querySelector(".modal__button");
  }
  setSubmitText() {
    this._button.textContent = "Saving...";
  }
  confirmDelete(confirmed) {
    this._handleFormSubmit = confirmed;
  }
  setEventListeners() {
    this._popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit();
    });
    super.setEventListeners();
  }
}
