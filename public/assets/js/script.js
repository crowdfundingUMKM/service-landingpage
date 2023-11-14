// Preloader js
// $(window).on("load", function () {
//   "use strict";
//   $(".preloader").fadeOut(0);
// });

// (function ($) {
//   "use strict";

//   // tab
//   $(".tab-content")
//     .find(".tab-pane")
//     .each(function (idx, item) {
//       var navTabs = $(this).closest(".code-tabs").find(".nav-tabs"),
//         title = $(this).attr("title");
//       navTabs.append(
//         '<li class="nav-item"><a class="nav-link" href="#">' +
//           title +
//           "</a></li>"
//       );
//     });

//   $(".code-tabs ul.nav-tabs").each(function () {
//     $(this).find("li:first").addClass("active");
//   });

//   $(".code-tabs .tab-content").each(function () {
//     $(this).find("div:first").addClass("active");
//   });

//   $(".nav-tabs a").click(function (e) {
//     e.preventDefault();
//     var tab = $(this).parent(),
//       tabIndex = tab.index(),
//       tabPanel = $(this).closest(".code-tabs"),
//       tabPane = tabPanel.find(".tab-pane").eq(tabIndex);
//     tabPanel.find(".active").removeClass("active");
//     tab.addClass("active");
//     tabPane.addClass("active");
//   });



//   // accordion-collapse
//   $(".accordion-collapse").on("show.bs.collapse", function () {
//     $(this).siblings(".accordion-header").addClass("active");
//   });
//   $(".accordion-collapse").on("hide.bs.collapse", function () {
//     $(this).siblings(".accordion-header").removeClass("active");
//   });

  // post slider
  // $(".post-slider").slick({
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 4500,
  //   dots: false,
  //   arrows: true,
  //   prevArrow:
  //     '<button type="button" class="prevArrow"><i class="fas fa-angle-left"></i></button>',
  //   nextArrow:
  //     '<button type="button" class="nextArrow"><i class="fas fa-angle-right"></i></button>',
  // });

  // videoPopupInit
  // function videoPopupInit() {
  //   var $videoSrc;
  //   $(".video-play-btn").click(function () {
  //     $videoSrc = $(this).data("src");
  //   });
  //   $("#videoModal").on("shown.bs.modal", function (e) {
  //     $("#showVideo").attr(
  //       "src",
  //       $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0"
  //     );
  //   });
  //   $("#videoModal").on("hide.bs.modal", function (e) {
  //     $("#showVideo").attr("src", $videoSrc);
  //   });
  // }
  // videoPopupInit();

//   function videoPopupInit() {
//     // Mendapatkan semua tombol yang akan memicu video popup
//     const videoPlayButtons = document.querySelectorAll('.video-play-btn');

//     // Event listener untuk setiap tombol
//     videoPlayButtons.forEach(button => {
//         button.addEventListener('click', function () {
//             const videoSrc = this.getAttribute('data-src'); // Mengambil URL video dari data-src attribute
//             // Ketika modal terbuka, ganti src dari iframe
//             const videoModalShowHandler = function () {
//                 const showVideo = document.getElementById('showVideo');
//                 showVideo.src = videoSrc + "?autoplay=1&modestbranding=1&showinfo=0";
//                 // Hapus event listener setelah dijalankan untuk menghindari duplikasi
//                 videoModal.removeEventListener('shown.bs.modal', videoModalShowHandler);
//             };
//             // Event listener untuk modal saat ditampilkan
//             const videoModal = document.getElementById('videoModal');
//             videoModal.addEventListener('shown.bs.modal', videoModalShowHandler);

//             // Event listener untuk modal saat disembunyikan
//             const videoModalHideHandler = function () {
//                 const showVideo = document.getElementById('showVideo');
//                 showVideo.src = ""; // Mengosongkan src untuk menghentikan video
//                 // Hapus event listener setelah dijalankan untuk menghindari duplikasi
//                 videoModal.removeEventListener('hide.bs.modal', videoModalHideHandler);
//             };
//             videoModal.addEventListener('hide.bs.modal', videoModalHideHandler);
//         });
//     });
// }

// // Inisialisasi fungsi saat dokumen siap.
// document.addEventListener('DOMContentLoaded', videoPopupInit);


// table of content
//   new ScrollMenu("#TableOfContents a", {
//     duration: 400,
//     activeOffset: 40,
//     scrollOffset: 10,
//   });
// })(jQuery);

// checkbox for pay
// function isCheckedPay(chk,sub1) {
//   var myLayer = document.getElementById(sub1);
//   if (chk.checked == true) {
//     myLayer.disabled = false;
//     myLayer.className = "btn btn-primary"
//     } else {
//       myLayer.disabled = true;
      
      
//   };
// }

// change to rupiah
function formatRupiah(angka, prefix){
  var number_string = angka.replace(/[^,\d]/g, '').toString(),
  split   		= number_string.split(','),
  sisa     		= split[0].length % 3,
  rupiah     		= split[0].substr(0, sisa),
  ribuan     		= split[0].substr(sisa).match(/\d{3}/gi);

  // tambahkan titik jika yang di input sudah menjadi angka ribuan
  if(ribuan){
    separator = sisa ? '.' : '';
    rupiah += separator + ribuan.join('.');
  }

  rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
  return prefix == undefined ? rupiah : (rupiah ? 'Rp. ' + rupiah : '');
}
// Fungsi untuk mengupdate harga
function updatePriceFromPay() {
  var input = document.getElementById('price_pay_umkm').value;
  var formattedPrice = formatRupiah(input, 'Rp. ');
  document.querySelector('.price_from_pay').innerText = formattedPrice;
}

// getvaleu from input

function getValeuFromPay() {
  var getInputPayUMKM = document.querySelector("#price_pay_umkm").value 
  var getPriceFromInput = document.querySelector(".price_from_pay");
  var valueToRupiah = formatRupiah(getInputPayUMKM, 'Rp. ')
  getPriceFromInput.innerHTML = valueToRupiah
  

  console.log(getInputPayUMKM);
}

