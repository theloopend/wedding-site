let imgOnClick = () => {};

window.addEventListener('DOMContentLoaded', () => {
    const modalImg = document.getElementById("image-displayed-in-modal");
    const captionText = document.getElementById("caption");
    const closeButton = document.getElementById("modal-close-button");
    const modal = document.getElementById("image-modal-wrapper");

    const closeTheModal = () => {
        modal.style.display = "none";
    }

    closeButton.onclick = closeTheModal
    modal.onclick = closeTheModal

    imgOnClick = (imageSrc, altText) => {
        modal.style.display = "block";
        modalImg.src = imageSrc;
        captionText.innerHTML = altText;
    }
    
});


