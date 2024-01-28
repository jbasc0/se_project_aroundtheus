import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import "./index.css";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import {
  initialCards,
  config,
  cardsWrap,
  editProfileModal,
  addCardModal,
  profileFormElement,
  addCardFormElement,
  cardPreviewModal,
  profileEditButton,
  profileName,
  profileDescription,
  addNewCardButton,
  cardPreviewImage,
  cardPreviewDescription,
  profileNameInput,
  profileDescriptionInput,
  cardTitleInput,
  cardUrlInput,
} from "../utils/constants.js";

const cardSection = new Section(
  {
    items: initialCards,
    renderer: (data) => cardSection.addItem(createCard(data)),
  },
  cardsWrap
);
cardSection.renderItems();

const popupImage = new PopupWithImage("#preview-image-modal");
popupImage.setEventListeners();

const handleImageClick = (cardData) => {
  popupImage.open(cardData);
};

const userInfo = new UserInfo(profileName, profileDescription);

const profileFormPopup = new PopupWithForm(
  "#edit-modal",
  handleProfileEditSubmit
);
profileFormPopup.setEventListeners();

profileEditButton.addEventListener("click", handleProfileEditOpen);

function handleProfileEditOpen() {
  const info = userInfo.getUserInfo();
  profileNameInput.value = info.name;
  profileDescriptionInput.value = info.job;
  profileFormValidator.resetValidation();
  profileFormPopup.open();
}

function handleProfileEditSubmit(data) {
  userInfo.setUserInfo({ name: data.name, job: data.description });
  profileFormValidator.resetValidation();
  profileFormPopup.close();
}

const newCardPopup = new PopupWithForm(
  "#add-card-modal",
  handleAddNewCardSubmit
);
newCardPopup.setEventListeners();

function handleAddNewCardSubmit(data) {
  const card = createCard({ name: data.name, link: data.url });
  cardSection.addItem(card);
  // cardFormValidator.resetValidation();
  newCardPopup.close();
}
function createCard(cardData) {
  const card = new Card(cardData, "#card-template", () =>
    handleImageClick(cardData)
  );
  return card.getView();
}

addNewCardButton.addEventListener("click", () => {
  cardFormValidator.resetValidation();
  newCardPopup.open();
});

const cardFormValidator = new FormValidator(config, addCardFormElement);
cardFormValidator.enableValidation();

const profileFormValidator = new FormValidator(config, profileFormElement);
profileFormValidator.enableValidation();

// const initialCards = [
//   {
//     name: "Yosemite Valley",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
//   },
//   {
//     name: "Lake Louise",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
//   },
//   {
//     name: "Bald Mountains",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
//   },
//   {
//     name: "Latemar",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
//   },
//   {
//     name: "Vanoise National Park",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
//   },
//   {
//     name: "Lago di Braies",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
//   },
// ];

//wrappers
// const cardsWrap = document.querySelector(".cards__list");
// const editProfileModal = document.querySelector("#edit-modal");
// const addCardModal = document.querySelector("#add-card-modal");
// const profileFormElement = editProfileModal.querySelector(".modal__form");
// const addCardFormElement = addCardModal.querySelector(".modal__form");
// const cardPreviewModal = document.querySelector("#preview-image-modal");

// //buttons and other DOM nodes
// const profileEditButton = document.querySelector(".profile__edit-button");
// const profileName = document.querySelector(".profile__name");
// const profileDescription = document.querySelector(".profile__description");
// const addNewCardButton = document.querySelector(".profile__add-button");
// const cardPreviewImage = document.querySelector("#preview-image");
// const cardPreviewDescription = document.querySelector("#preview-description");

// //formdata
// const profileNameInput = profileFormElement.querySelector(
//   "#profile-name-input"
// );
// const profileDescriptionInput = profileFormElement.querySelector(
//   "#profile-description-input"
// );
// const cardTitleInput = addCardFormElement.querySelector(
//   ".modal__input_type_title"
// );
// const cardUrlInput = addCardFormElement.querySelector(".modal__input_type_url");

// function handleEscape(evt) {
//   if (evt.key === "Escape") {
//     const openedPopup = document.querySelector(".modal_opened");
//     closeModal(openedPopup);
//   }
// }
// function closeModal(modal) {
//   modal.classList.remove("modal_opened");
//   document.removeEventListener("keydown", handleEscape);
// }
// function openModal(modal) {
//   modal.classList.add("modal_opened");
//   document.addEventListener("keydown", handleEscape);
// }
// function fillProfileForm() {
//   profileName.textContent = profileNameInput.value;
//   profileDescription.textContent = profileDescriptionInput.value;
// }
// function handleProfileFormSubmit(e) {
//   e.preventDefault();
//   fillProfileForm();
//   closeModal(editProfileModal);
// }

// function renderCard(cardData) {
//   const cardElement = createCard(cardData);
//   cardsWrap.prepend(cardElement);
// }
// function handleCardFormSubmit(e) {
//   e.preventDefault();
//   const name = cardTitleInput.value;
//   const link = cardUrlInput.value;
//   renderCard({ name, link }, cardsWrap);
//   closeModal(addCardModal);
//   addCardFormElement.reset();
//   cardFormValidator.resetValidation();
// }
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

//close modals
// [editProfileModal, addCardModal, cardPreviewModal].forEach((modal) => {
//   modal.addEventListener("click", (evt) => {
//     if (
//       evt.target.classList.contains("modal") ||
//       evt.target.classList.contains("modal__close")
//     ) {
//       closeModal(modal);
//     }
//   });
// });

// profileFormElement.addEventListener("submit", handleProfileFormSubmit);
// addCardFormElement.addEventListener("submit", handleCardFormSubmit);
// profileEditButton.addEventListener("click", () => {
//   profileNameInput.value = profileName.textContent;
//   profileDescriptionInput.value = profileDescription.textContent;
//   openModal(editProfileModal);
//   profileFormValidator.resetValidation();
// });
// addNewCardButton.addEventListener("click", () => {
//   openModal(addCardModal);
//   cardFormValidator.resetValidation();
// });

//for loop to insert cards
// initialCards.forEach((cardData) => renderCard(cardData, cardsWrap));

// const config = {
//   formSelector: ".modal__form",
//   inputSelector: ".modal__input",
//   submitButtonSelector: ".modal__button",
//   inactiveButtonClass: "modal__button_disabled",
//   inputErrorClass: "modal__input_type_error",
//   errorClass: "modal__error_visible",
// };
