window.onload = function(){

    if(sessionStorage.getItem("welcomeShown")){
        document.getElementById("welcome")
        .style.display = "none";
    }

};

function closePopup(){

    document.getElementById("welcome")
    .style.display = "none";

    sessionStorage.setItem(
        "welcomeShown",
        "true"
    );

}