$(document).ready(function () {
  var owl = $('.owl-carousel');
    owl.owlCarousel({
        loop: true,
        center: true,
        rtl:true,
      margin: 10,
      dots: false,
      dotsData:true,
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
  
  
    $('.custom-dots button').click(function() {
      var dotIndex = $(this).data('dot');
      owl.trigger('to.owl.carousel', [dotIndex * 3, 300]);
      $('.custom-dots button').removeClass('active');
      $(this).addClass('active');
    });

    function updateActiveDot(dotIndex) {
      $('.custom-dots button').removeClass('active');
      $('.custom-dots button[data-dot="' + dotIndex + '"]').addClass('active');
  }
  owl.on('changed.owl.carousel', function(event) {
    var clonesCount = event.relatedTarget._clones.length / 2;
    var currentIndex = (event.item.index - clonesCount + event.item.count) % event.item.count;
    var buttonIndex = Math.floor(currentIndex / 3); // Each button controls a group of 3 items
    updateActiveDot(buttonIndex);
  });
    // Set the first dot as active
  $('.custom-dots button').first().addClass('active');
  

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
      const arr=["image.png","image2.jpg","image3.jpg"]
      $(".project-desc").click(function(){
        $(".project-desc").removeClass("focus-style");
        $(this).addClass("focus-style");
        $(".project-image").attr("src",`./public/${arr[this.id]}`)
      })

  $(`input[type="email"]`).focus(function () {
    $(".emailLable").css({
          "top":"-0.5rem"
    })
  }).blur(function () {
   
    if ($(this).val() === "") {
      $(".emailLable").css({
            "top":"1rem"
          })
          
        }
      })

  $(`input[name="firstName"]`).focus(function () {
    $(".fnameLable").css({
          "top":"-0.5rem"
    })
  }).blur(function () {
   
    if ($(this).val() === "") {
      $(".fnameLable").css({
            "top":"1rem"
          })
          
        }
      })
  $(`input[name="lastName"]`).focus(function () {
    $(".lnameLable").css({
          "top":"-0.5rem"
    })
  }).blur(function () {
   
    if ($(this).val() === "") {
      $(".lnameLable").css({
            "top":"1rem"
          })
          
        }
      })
       
})