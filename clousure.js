// closure: clourse means inner function is always access the property of outer function var, parameter event aftr the outer function returned

function marks(math, eng) {
  let internal = 20;
  console.log("outer fn", math, eng);

  function eachMArks() {
    let practical = 40;
    console.log("inner fn", math, eng, internal, practical);
  }
  eachMArks();
}

marks(90, 91);
