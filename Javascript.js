// Creating an array for the wishlisted items
var wishlist = [];
        
        // Get all elements with the class "heart"
        var heartElements = document.querySelectorAll(".heart");

        // Add a click event listener to each "heart" element
        heartElements.forEach(function (heartElement) {
            heartElement.addEventListener("click", function () {

              // Find the parent item container
              var itemContainer = heartElement.closest(".item");

              // Find the item name based on the data attribute
              var itemName = itemContainer.getAttribute("data-item-name");
              
              // Toggle the color of the heart icon (red to white or white to red)
              if (heartElement.src.endsWith("heart.png")) {
                  heartElement.src = "/images/redHeart.png";
                  
                  // Remove the item from the wishlist if it exists
                  var index = wishlist.indexOf(itemName);
                  if (index !== -1) {
                      wishlist.splice(index, 1);
                  }
              } else {
                  heartElement.src = "/images/heart.png";
                  // Add the item to the wishlist (change "Item Name" to the actual item name)
                  wishlist.push(itemName);
              }
              // Update the wishlist in local storage (optional)
              localStorage.setItem("wishlist", JSON.stringify(wishlist));
              /* // Update the wishlist display
                updateWishlistDisplay(); */
            });
        });


   // Privacy and Cookie Consent code
document.addEventListener("DOMContentLoaded", function () {
    const consentBanner = document.querySelector(".consent-banner");
    const acceptButton = document.getElementById("consent-accept");
    const rejectButton = document.getElementById("consent-reject");

    if(!consentBanner)
        return;
    // Always display the consent banner when the page loads.
    consentBanner.style.display = "block";

    acceptButton.addEventListener("click", function () {
        // Set a flag in local storage to remember the user's choice.
        localStorage.setItem("cookieConsent", "accepted");

        // Hide the consent banner.
        consentBanner.style.display = "none";
    });
    rejectButton.addEventListener("click", function () {
        // Set a flag in local storage to remember user's choice.
        localStorage.setItem("cookieConsent", "rejected");

        // Hide the consent banner.
        consentBanner.style.display = "none";

        
    });
    

});

//Code to filter reviews
// function filterReviews() {
//     let rating = document.getElementById("starRating").value;
//     fetch(`/getReviews?rating=${rating}`)
//     .then(response => response.json())
//     .then(data => {
//         let reviewsSection = document.getElementById('reviewsSection');
//         reviewsSection.innerHTML = ''; // Clearing old reviews

//         data.forEach(review => {
//             reviewsSection.innerHTML += `
//                 <div class="review">
//                     <p>Name: ${review.user_name}</p>
//                     <p>Rating: ${review.star_rating} Stars</p>
//                     <p>Review: ${review.review_text}</p>
//                 </div>
//             `;
//         });
//     });
// }



// Code for review confirmation
document.addEventListener("DOMContentLoaded", function() {
    let submit = document.getElementById("submitReview");
    const reviewConfirmation = document.querySelector(".submitReview");
    const comment = document.getElementById('commentBox').value;
    
    // Show the confirmation when the button is clicked
    submit.addEventListener('click', function() {
        
        reviewConfirmation.style.display = "block";
        resetStars();

    });

    // Close the confirmation when clicked outside
    document.addEventListener('click', function(event) {
        if (!reviewConfirmation.contains(event.target) && event.target !== submit) {
            reviewConfirmation.style.display = "none";
        }
    });

    // Window closes when user clicks "x"
    const closeButton = document.querySelector(".closeConfirmation");
    closeButton.addEventListener('click', function() {
        reviewConfirmation.style.display = "none";
    });



    const stars = document.querySelectorAll('.star');

    stars.forEach(star => {
        star.addEventListener('click', function() {
            resetStars();
            let ratingValue = this.getAttribute('data-rating');
            highlightStars(ratingValue);
        });
    });

    function resetStars() {
        stars.forEach(star => {
            star.src = '/images/blackStar.png';
        });
    }

    function highlightStars(ratingValue) {
        for (let i = 0; i < ratingValue; i++) {
            stars[i].src = '/images/goldStar.png';
        }
    }

    function submitReview() {
        let starRating = 0;

        stars.forEach(star => {
            if (star.src.includes('/images/goldStar.png')) {
                starRating++;
            }
        });
    }
});

// Popups for messageus and callus options in contactPage.
document.addEventListener("DOMContentLoaded", function() {
    let call = document.getElementById("callUs");
    const callUs = document.querySelector(".callUs");

    let message = document.getElementById("messageUs");
    const messageUs = document.querySelector(".messageUs");

    // Show the call confirmation when the button is clicked
    call.addEventListener('click', function() {
        callUs.style.display = "block";
    });

    // Show the message confirmation when the button is clicked
    message.addEventListener('click', function() {
        messageUs.style.display = "block";
    });

    // Window closes when user clicks "x"
    const closeButtons = document.querySelectorAll(".closeConfirmation");
    closeButtons.forEach(closeButton => {
        closeButton.addEventListener('click', function() {
            messageUs.style.display = "none";
            callUs.style.display = "none";
        });
    });
});

// Copy phone number to user's clipboard
function copyToClipboard() {
    const el = document.getElementById('phoneNum');
    const textArea = document.createElement('textarea');
    textArea.value = el.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);

    // Optional: Notify the user that the number has been copied
    alert('Phone number copied to clipboard!');
};

document.addEventListener("DOMContentLoaded", function(){
    let submit = document.getElementById("submit");
    let form = document.getElementById("contractForm")
    submit.addEventListener("click", function(){

    })
});