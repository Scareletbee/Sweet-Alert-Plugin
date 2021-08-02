function message1() {
  swal("Hello,Everyone!🙋🏽");
}

function message2() {
  swal("Do Coding to get smarter..😉");
}

function message3() {
  swal("⚠️Oops! it was a 1-1 warning you weren't suppose to click🥤");
}

function message4() {
  swal("Do you love me?", {
    buttons: ["No", "Yes"]
  });
}

function message5() {
  swal("Type Something", { content: "input" }).then((value) => {
    swal("You wrote", value);
  });
}

function message6() {
  swal("drose", { button: "Pass" });
}
