function changeAtiveTab(event,tabID){
    let element = event.target;
    while(element.nodeName !== "A"){
    element = element.parentNode;
}
    ulElement = element.parentNode.parentNode;
    aElements = ulElement.querySelectorAll("li > a");
    tabContents = document.getElementById("tabs-id").querySelectorAll(".tab-content > div");
    for(let i = 0 ; i < aElements.length; i++){
    aElements[i].classList.remove("bg-gray-200");
    aElements[i].classList.add("bg-white");
    tabContents[i].classList.add("hidden");
    tabContents[i].classList.remove("block");
}
    element.classList.remove("bg-white");
    element.classList.add("bg-gray-200");
    document.getElementById(tabID).classList.remove("hidden");
    document.getElementById(tabID).classList.add("block");
}

function hideShow() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }