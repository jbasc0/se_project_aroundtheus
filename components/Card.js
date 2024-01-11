export default class Card {
  constructor({ name, link }, cardSelector, handleImageClick) {
    this.name = name;
    this.link = link;
    this._cardSelector = cardSelector;
    this._handleImageClick = handleImageClick;
  }

  _setEventListeners() {
    this._likeButton.addEventListener("click", () => {
      this._handleLikeBtn();
    });
    this._deleteButton.addEventListener("click", () => {
      this._handleDeleteCard();
    });
    this._cardImageEl.addEventListener("click", () => {
      this._handleImageClick(this);
    });
  }

  _handleLikeBtn() {
    this._likeButton.classList.toggle("card__like-button_active");
  }

  _handleDeleteCard() {
    this._cardElement.remove();
    this._cardElement = null;
  }

  getView() {
    this._cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);

    this._cardTitleEl = this._cardElement.querySelector(".card__title");
    this._likeButton = this._cardElement.querySelector(".card__like-button");
    this._cardImageEl = this._cardElement.querySelector(".card__image");
    this._deleteButton = this._cardElement.querySelector(
      ".card__delete-button"
    );
    this._cardTitleEl.textContent = this.name;
    this._cardImageEl.src = this.link;
    this._cardImageEl.alt = this.name;
    this._setEventListeners();
    return this._cardElement;
  }
}

// function getCardElement(cardData) {
//   const cardElement = cardTemplate.cloneNode(true);
//   const cardImageElement = cardElement.querySelector(".card__image");
//   const cardTitleElement = cardElement.querySelector(".card__title");
//   const likeButton = cardElement.querySelector(".card__like-button");
//   const deleteButton = cardElement.querySelector(".card__delete-button");
//   likeButton.addEventListener("click", () => {
//     likeButton.classList.toggle("card__like-button_active");
//   });
//   deleteButton.addEventListener("click", () => {
//     cardElement.remove();
//   });
//   cardImageElement.src = cardData.link;
//   cardTitleElement.textContent = cardData.name;
//   cardImageElement.alt = cardData.name;
//   cardImageElement.addEventListener("click", () => {
//     cardPreviewImage.src = cardData.link;
//     cardPreviewImage.alt = cardData.name;
//     cardPreviewDescription.textContent = cardData.name;
//     openModal(cardPreviewModal);
//   });
//   return cardElement;
// }
