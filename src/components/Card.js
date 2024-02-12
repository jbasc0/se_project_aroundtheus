export default class Card {
  constructor({
    cardData,
    cardSelector,
    handleImageClick,
    handleLikeClick,
    handleDeleteClick,
  }) {
    this._name = cardData.name;
    this._link = cardData.link;
    this._cardId = cardData._id || cardData.userId;
    this._likeStatus = cardData.isLiked;
    this._userId = cardData.userId;
    this._cardSelector = cardSelector;
    this._handleImageClick = handleImageClick;
    this._handleLikeClick = handleLikeClick;
    this._handleDeleteClick = handleDeleteClick;
  }

  _setEventListeners() {
    this._likeButton.addEventListener("click", () => {
      this._handleLikeClick(this);
    });
    this._deleteButton.addEventListener("click", () => {
      this._handleDeleteClick(this);
    });
    this._cardImageEl.addEventListener("click", () =>
      this._handleImageClick({ name: this._name, link: this._link })
    );
  }

  _handleLikeBtn() {
    this._likeButton.classList.toggle("card__like-button_active");
  }

  handleDeleteCard() {
    this._cardElement.remove();
    this._cardElement = null;
  }

  showLikes(data) {
    if (data) {
      this._likeButton.classList.add("card__like-button_active");
    } else {
      this._likeButton.classList.remove("card__like-button_active");
    }

    // this._likeCounter.textContent = this._likes.length;
    // this._handleLikeBtn();
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
    this._cardTitleEl.textContent = this._name;
    this._cardImageEl.src = this._link;
    this._cardImageEl.alt = this._name;
    this._likeCounter = this._cardElement.querySelector(".card__like-counter");
    this._setEventListeners();
    this.showLikes(this._likes);
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
