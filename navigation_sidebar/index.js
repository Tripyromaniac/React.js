$(".btn").onclick = function () {
  $(".btn").classList.toggle("click");
  $(".sidebar").classList.toggle("show");
};

$(".feat-btn").onclick = function () {
  $("nav ul .feat-show").classList.toggle("show");
  $("nav ul .first").classList.toggle("rotate");
};
$(".serv-btn-1").onclick = function () {
  $("nav ul .serv-show-1").classList.toggle("show1");
  $("nav ul .second").classList.toggle("rotate");
};

$(".serv-btn-2").onclick = function () {
  $("nav ul .serv-show-2").classList.toggle("show2");
  $("nav ul .third").classList.toggle("rotate");
};

$("nav ul li").click(function () {
  $("nav ul li").addClass("active").siblings().removeClass("active");
});
