(function () {
  "use strict";

  let inputs = document.querySelectorAll(".imask-input");

  inputs.forEach(function (e) {
    const maskOptions = {
      mask: "+{7} (000) 000-00-00",
    };
    const mask = IMask(e, maskOptions);
  });
})();
