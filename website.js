//Coded by Sandhiya
// Function for search buttion to hide and display the hidden container. STILL IN PROGRESS..

const searchtext = document.getElementById("searchtext");
function hideshow() {
  // pompt("clicked")

  if (searchtext.style.display != "none") {
    searchtext.style.display = "none";
  } else {
    searchtext.style.display = "block";
  }
}

//Coded by Camelia
// Tag element for call to action button
const ctaButton = document.createElement("a");
ctaButton.href = "subscribe.html";
ctaButton.className = "cta-button";
ctaButton.textContent = "Get Started";

// // Find the banner element and its text container
const banner = document.querySelector(".banner");
const textContainer = banner.querySelector(".text");
textContainer.appendChild(ctaButton);

// coded by Sandhiya
// Event Quick links for each card

// const eventButton1 = document.createElement("a");
// eventButton1.href = "https://www.moma.co.uk/childrens-art-competitions/";
// eventButton1.className = "eventlink";
// const cardkids= document.getElementById("card1")
// cardkids.appendChild(eventButton1);

// const eventButton2 = document.createElement("a");
// eventButton2.href = "https://royalsociety.org/science-events-and-lectures/summer-science-exhibition/";
// eventButton2.className = "eventlink";
// const cardtech= document.getElementById("card2")
// cardtech.appendChild(eventButton2);

// const eventButton3 = document.createElement("a");
// eventButton3.href = "https://www.thebigbang.org.uk/the-big-bang-competition/";
// eventButton3.className = "eventlink";
// const cardscience= document.getElementById("card3")
// cardscience.appendChild(eventButton3);

// // function to make event cards clikable
// var cards = document.querySelectorAll(".cardrow");
// for (var i=0; i<cards.length; i++) {
//   cards[i].addEventListener('click', function(e) {
//     var link = this.querySelector(".eventlink");
//     link.click();
//   }, false);
// }

