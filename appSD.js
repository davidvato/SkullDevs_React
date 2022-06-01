$(window).on("load", function () {
    // asegurarse de que todo el sitio cargue
    $("#status").fadeOut(); // primero desvaneseremos la imagen de animacion
    $("#preloader").delay(1000).fadeOut("slow"); // desvaneceremos el DIV que cubre todo el sitio
    $("body").delay(1000).css({ overflow: "visible" });
  });