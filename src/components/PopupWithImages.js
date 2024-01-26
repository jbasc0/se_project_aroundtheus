import Popup from "./Popup";
export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._previewImage = document.querySelector(".modal__preview_image");
    this._previewDescription = document.querySelector(
      ".modal__preview_description"
    );
  }
  open(data) {
    this._previewImage.src = data.link;
    this._previewImage.alt = data.name;
    this._previewDescription.textContent = data.name;
    super.open();
  }
}
