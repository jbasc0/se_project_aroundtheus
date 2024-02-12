export const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];

//wrappers
export const cardsWrap = document.querySelector(".cards__list");
export const editProfileModal = document.querySelector("#edit-modal");
export const addCardModal = document.querySelector("#add-card-modal");
export const profileFormElement =
  editProfileModal.querySelector(".modal__form");
export const addCardFormElement = addCardModal.querySelector(".modal__form");
export const cardPreviewModal = document.querySelector("#preview-image-modal");
export const avatarModal = document.querySelector("#avatar-modal");
export const avatarFormElement = avatarModal.querySelector(".modal__form");

//buttons and other DOM nodes
export const profileEditButton = document.querySelector(
  ".profile__edit-button"
);
export const profileName = document.querySelector(".profile__name");
export const profileImage = document.querySelector(".profile__image");
export const avatarButton = document.querySelector(".profile__avatar-button");
export const profileDescription = document.querySelector(
  ".profile__description"
);
export const addNewCardButton = document.querySelector(".profile__add-button");
export const cardPreviewImage = document.querySelector("#preview-image");
export const cardPreviewDescription = document.querySelector(
  "#preview-description"
);

//formdata
export const profileNameInput = profileFormElement.querySelector(
  "#profile-name-input"
);
export const profileDescriptionInput = profileFormElement.querySelector(
  "#profile-description-input"
);
export const cardTitleInput = addCardFormElement.querySelector(
  ".modal__input_type_title"
);
export const cardUrlInput = addCardFormElement.querySelector(
  ".modal__input_type_url"
);

export const config = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};
