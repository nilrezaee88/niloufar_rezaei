//portfolio.js
const welcomeStr = "WELCOME.";
let element = [];
[...welcomeStr].forEach((item) => {
  element.push(`<span>${item}</span>`);
});
const welcomeFunction = () => {
  document.getElementById("main-description").innerHTML = `<div> 
      <p id="welcome"></p>
      <span class='welcome-container'>
          <p>
              My name is Niloufar Rezaei, I'm a Frontend developer and holding a Bsc in Software Engineering from one of the best universities of Iran. I have developed some types of front-end
              applications from well know libraries and frameworks of Js Like react, react-native, next.js,
              typscript.
          </p>
          <p> I'm passionate about cutting-edge, pixel-perfect, beautiful interfaces and intuitively
              implemented
              UX
              inside security of application.
          </p>
      </span>
    </div>`;
  document.getElementById("welcome").innerHTML = element.join("");
};
welcomeFunction();
document.getElementById("a4baz").addEventListener("click", function () {
  document.getElementById(
    "main-description"
  ).innerHTML = `<div class="project-description">
      <h3>A4baz</h3>
      <span>A4baz is a comprehensive repair services platform offering a swift registration process for over 300 services. Upon receiving a customer's order through the serviceman's mobile app, our skilled servicemen promptly provide a tailored offer based on the detailed customer information provided. Customers have the convenience of reviewing all service offers and selecting the most suitable one from the array of options available. Additionally, customers have the flexibility to choose whether the service is to be conducted at their home or our company premises.
       This versatile platform is accessible via both web and mobile applications, developed using the latest frameworks including Next.js and React Native, and is powered by TypeScript.
      </span>
      <div class="view-project">
          <a href="https://a4baz.com" target="_blank">View Site</a>
          <a href="https://play.google.com/store/apps/details?id=com.falnic.acharbaz_customer&hl=en&gl=US" target="_blank">
              View on Google Play Store
          </a>
          <a href="https://cafebazaar.ir/app/com.falnic.acharbaz_customer?l=en" target="_blank">View Cafebazar Store</a>
      </div>
  </div>`;
});
document.getElementById("tapin").addEventListener("click", function () {
  document.getElementById(
    "main-description"
  ).innerHTML = `<div class="project-description">
    <h3>Tapin</h3>
    <span>Tapin is a logistics transportation platform that caters to businesses of all sizes, from home-based enterprises to large corporations, facilitating the delivery of packages nationwide. This versatile platform serves as a valuable resource for transportation companies, offering accessibility through both web and mobile applications. Developed using cutting-edge frameworks such as Bootstrap and React Native, Tapin harnesses the power of TypeScript to streamline operations 
    </span>
    <div class="view-project">
        <a href="https://tapin.ir" target="_blank">View Site</a>
        <a href="https://www.tapin.ir/wp-content/uploads/2022/12/faktor.mp4" target="_blank">
            Part Of Panel In Video
        </a>
    </div>
</div>`;
});
document.getElementById("ahub").addEventListener("click", function () {
  document.getElementById(
    "main-description"
  ).innerHTML = `<div class="project-description">
    <h3>Ahub</h3>
    <span>
    ahub Photo is the best media management alternative to your phone’s native Photos app. You can manage your photos and videos, edit their metadata (such as location, tags, caption) or create diary like notes which you can organize and search to find with ease.   
    I have participated in developing of this project as one of the front-end developers.
    </span>
    <div class="view-project">
        <a href="https://apps.apple.com/tt/app/ahub/id1610411893" target="_blank">View On App Store</a>
    </div>
</div>`;
});
// document.getElementById("nextProject").addEventListener("click", function () {
//   document.getElementById(
//     "main-description"
//   ).innerHTML = `<div class="project-description">
//   </div>`;
// });
document.getElementById("logo").addEventListener("click", function () {
  welcomeFunction();
});
