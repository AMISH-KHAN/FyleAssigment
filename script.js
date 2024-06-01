$(document).ready(function () {
    
    $('.owl-carousel').owlCarousel({
        loop: true,
        center: true,
        rtl:true,
        margin:10,
      nav: false,
      autoplay:true,
      autoplayTimeout:1000,
      autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    })
    $(this).find(".item-back").remove();
    $(".item").mouseenter(function(){
        // Append the item-back div when hovering over an item
        $(this).append(`<div class="item-back">
        <div class="item-back-content">
          <img style="width: 3rem;" src="./Public/icon.svg" alt="">
          <h5>Web Development</h5>
          <p>Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque</p>
          <a href="https://www.fylehq.com/" target="_blank">Read More <span><img style="width: 2rem;" src="./Public/arrow.svg" alt=""></span></a>
        </div>
      
      </div> `);
      }).mouseleave(function(){
        // Remove the item-back div when leaving the item
        $(this).find(".item-back").remove();
      });

      $(".project-desc").click(function(){
        // Focus the clicked element
        $(this).focus();
      });

      // Handle the focus event
      $(".project-desc").focus(function(){
        $(this).addClass("focus-style");
      }).blur(function(){
        $(this).removeClass("focus-style");
      });

      // Also handle click to ensure the element gets focused
      
       
})