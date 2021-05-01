var zoomImg = function () {
    // (A) CREATE IMAGE CLONE
    var clone = this.cloneNode();
    clone.classList.remove("galleryable");
  
    // (B) PUT IMAGE CLONE INTO LIGHTBOX
    var lb = document.getElementById("lb-img");
    lb.innerHTML = "";
    lb.appendChild(clone);
  
    // (C) SHOW LIGHTBOX
    lb = document.getElementById("lb-back");
    lb.classList.add("show");
  };
  
  window.addEventListener("load", function(){


    // (D) ATTACH ON CLICK EVENTS TO ALL .galleryable IMAGES
    var images = document.getElementsByClassName("galleryable");
    if (images.length>0) {
      for (var img of images) {
        img.addEventListener("click", zoomImg);
      }
    }
  
      // Gallery view function    : d o e s n o t w o r k y e t 
      window.onload = function () {
          document.getElementsByClassName("galleryable").forEach(function () {
              this.onclick = function () {
                  document.getElementById("lb-img").src = this.src;
              }
          });
      }




    // (E) CLICK EVENT TO HIDE THE LIGHTBOX
    document.getElementById("lb-back").addEventListener("click", function(){
      this.classList.remove("show");
    })
  });