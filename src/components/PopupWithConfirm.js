import Popup from "./Popup.js";
export default class PopupWithConfirm extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupForm = this._popupElement.querySelector(".modal__form");
    this._button = this._popupElement.querySelector(".modal__button");
  }

  setSubmitText() {
    this._button.textContent = "Saving...";
  }

  setEventListeners() {
    this._popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    super.setEventListeners();
  }
}
