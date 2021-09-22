allSections=document.querySelectorAll('.section'); //selecting all sections in the page
unordList=document.createElement("ul"); // selecting unordered list
unordList.className="navBox nav";// adding class  navBov nav to the ul element



for(section of allSections) // going through every section inside the Node array
{


//creating <li> tags and setting content to each one.
var navItem = document.createElement('li'); // creating a list element as a nav element
navItem.className =" nav buttonStyle "+section.querySelector('h3').innerText; // <li> item setting class Nav



//creating <a> tag
var linkNav = document.createElement('a'); //creating <a> element
linkNav.innerHTML =section.querySelector('h3').innerText;// making the content of the <a> tag equal to the title of each section
var hrefVar = "#"+linkNav.innerHTML ; //combining the # with sectiontitle to create the href content
linkNav.setAttribute("href",hrefVar);
section.setAttribute("id",hrefVar.substring(1) ); //setting an Id to the existing <li> inside the sections


//appending all elements to each other and to the body
navItem.appendChild(linkNav); // adding <a> tag to <li> tag
unordList.appendChild(navItem);//adding<li>tag to <ul> tag
 document.body.appendChild(unordList);//adding<ul>tag to the body.

}
 var allNavs =document.querySelectorAll('.buttonStyle');//all nav Items



 const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.6,


};
// IntersectionObserver function
var count=0;
function observercallback(entries,observer){
  for( entry of entries){

  var targetClick = entry.target.id;
  ///console.log(document.querySelector("."+targetClick));
  ///document.querySelector("."+targetClick).classList(".active");
var elemN =document.querySelector("."+targetClick);
if(entry.isIntersecting){
 elemN.classList.add("active");
 count++;
}

 for( nava of   allNavs) {

   if(  entry.isIntersecting === false )
     nava.classList.remove("active"); } }}


    const observer = new IntersectionObserver(observercallback, observerOptions);

    allSections.forEach((sec) => observer.observe(sec));
