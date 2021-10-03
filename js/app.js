allSections = document.querySelectorAll('.section'); //selecting all sections in the page
unordList = document.createElement("ul"); // selecting unordered list
unordList.className = "navBox nav"; // adding class  navBov nav to the ul element



for (section of allSections) // going through every section inside the Node array
{


  //creating <li> tags and setting content to each one.
  let navItem = document.createElement('li'); // creating a list element as a nav element
  navItem.className = " nav buttonStyle " + section.querySelector('h3').innerText; // <li> item setting class Nav



  //creating <a> tag
  let linkNav = document.createElement('a'); //creating <a> element
  linkNav.innerHTML = section.querySelector('h3').innerText; // making the content of the <a> tag equal to the title of each section
  let hrefVar = "#" + linkNav.innerHTML; //combining the # with sectiontitle to create the href content
  //linkNav.setAttribute("href", hrefVar);   // I removed the href
  section.setAttribute("id", hrefVar.substring(1)); //setting an Id to the existing <li> inside the sections


  //appending all elements to each other and to the body
  navItem.appendChild(linkNav); // adding <a> tag to <li> tag
  unordList.appendChild(navItem); //adding<li>tag to <ul> tag
  document.body.appendChild(unordList); //adding<ul>tag to the body.

}
let allNavs = document.querySelectorAll('.buttonStyle'); //all nav Items



const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.8,


};
// IntersectionObserver function
let count = 0;

function observercallback(entries, observer) {
  for (entry of entries) {

    let targetClick = entry.target.id;
    ///console.log(document.querySelector("."+targetClick));
    ///document.querySelector("."+targetClick).classList(".active");
    let elemN = document.querySelector("." + targetClick);
    if (entry.isIntersecting) {
      elemN.classList.add("active");
      count++;
    }

    for (nava of allNavs) {

      if (entry.isIntersecting === false)
        nava.classList.remove("active");
    }
  }
}


const observer = new IntersectionObserver(observercallback, observerOptions);

allSections.forEach((sec) => observer.observe(sec));





/////////////////////////////////////Scroll Behaviour smooth to sections inside the page////////////////////////////////////////////////////////////////////////////////////////////////
let allButtons = document.getElementsByClassName("buttonStyle"); //selecting all items inside the navBar using buttonStyle class
let counting = 1; // counter for changing the Id of each Section
for (button of allButtons) { // going through every nav Item

  let theClass = "#section" + counting; // creating the Id full name to get sections
  let evSection = document.querySelector(theClass); // geting sections
  counting++; //counting throughto the next section
  button.addEventListener("click", function() // the event listener on nav bar items
    {

      evSection.scrollIntoView({
        behavior: 'smooth'
      }); // scrolling to each section.
    })

}
