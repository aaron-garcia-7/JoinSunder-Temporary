const cta = document.querySelector(".cta");
const contactContainer = document.querySelector(".contactContainer");
const contactPanel = document.querySelector(".contactPanel");
const closeFormBtn = document.querySelector(".closeForm");
const submitBtn = document.querySelector(".submitBtn");

let formState = false;

const toggleForm = () => {
  formState = !formState;

  if (formState) {
    contactContainer.classList.add("contactContainerActive");
    contactPanel.classList.add("contactPanelActive");
  } else {
    contactContainer.classList.remove("contactContainerActive");
    contactPanel.classList.remove("contactPanelActive");
  }
};

cta.addEventListener("click", () => toggleForm());
closeFormBtn.addEventListener("click", () => toggleForm());

contactContainer.addEventListener("click", ({ target }) => {
  if (target.classList.contains("contactContainer")) {
    toggleForm();
  }
});

const openForm = () => {
  formState = true;

  if (formState) {
    contactContainer.classList.add("contactContainerActive");
    contactPanel.classList.add("contactPanelActive");
  } else {
    contactContainer.classList.remove("contactContainerActive");
    contactPanel.classList.remove("contactPanelActive");
  }
};
const closeForm = () => {
  formState = false;

  if (formState) {
    contactContainer.classList.add("contactContainerActive");
    contactPanel.classList.add("contactPanelActive");
  } else {
    contactContainer.classList.remove("contactContainerActive");
    contactPanel.classList.remove("contactPanelActive");
  }
};

const logo = document.querySelector(".logo");
logo.addEventListener("focus", () => {
  closeForm();
  closeVideo();
});

const formLogoLink = document.querySelector(".formLogoLink");
formLogoLink.addEventListener("focus", () => {
  openForm();
  closeVideo();
});

submitBtn.addEventListener("focus", () => {
  openForm();
  closeVideo();
});

//
// Handling Video Container Logic
//

const cta2 = document.querySelector(".cta2");
const videoContainer = document.querySelector(".videoContainer");
const closeVideoBtn = document.querySelector(".closeVideoBtn");
const videoElement = document.querySelector("#videoElement");

let videoState = false;

const toggleVideo = () => {
  videoState = !videoState;
  videoElement.play();

  if (videoState) {
    videoContainer.classList.add("videoContainerActive");
  } else {
    videoContainer.classList.remove("videoContainerActive");
  }
};
const openVideo = () => {
  videoState = true;
  videoElement.play();

  if (videoState) {
    videoContainer.classList.add("videoContainerActive");
  } else {
    videoContainer.classList.remove("videoContainerActive");
  }
};
const closeVideo = () => {
  videoState = false;
  videoElement.pause();

  if (videoState) {
    videoContainer.classList.add("videoContainerActive");
  } else {
    videoContainer.classList.remove("videoContainerActive");
  }
};

cta2.addEventListener("click", () => {
  toggleVideo();
  closeForm();
});
cta2.addEventListener("focus", () => {
  closeForm();
});
closeVideoBtn.addEventListener("click", () => {
  toggleVideo();
  videoElement.pause();
});

videoContainer.addEventListener("click", ({ target }) => {
  if (target.classList.contains("videoContainer")) {
    toggleVideo();
    videoElement.pause();
  }
});

videoElement.addEventListener("focus", () => {
  closeForm();
  openVideo();
});
