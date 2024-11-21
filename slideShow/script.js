let position = 0;
let slides = 5;
let last_user = false;
let size = document.getElementById("image1").clientWidth;
console.log(size);
function Slide(direction, user = false) {
  if (user) {
    last_user = true;
  }
  if (last_user && !user) {
    last_user = false;
    return;
  }
  console.log(position);

  console.log(direction);
  if (direction == "left") {
    position--;
    document.getElementById("container").style.transform = `translateX(-${
      position * size
    }px)`;
  } else if (direction == "right") {
    position++;
    document.getElementById("container").style.transform = `translateX(-${
      position * size
    }px)`;
  } else {
    console.log("wtf");
  }
  if (position == slides) {
    setTimeout(set_start, 710);
  }
}

function set_start() {
  position = 0;
  document.getElementById("container").classList.remove("duration-700");
  document.getElementById("container").style.transform = `translateX(-${
    position * size
  }px)`;
  setTimeout(set_start2, 15);
}

function set_start2() {
  document.getElementById("container").classList.add("duration-700");
}

setInterval(Slide, 5000, "right");
let left = document.getElementById("left_button");
let right = document.getElementById("right_button");
left.addEventListener("click", function () {
  Slide("left", true);
});
right.addEventListener("click", function () {
  Slide("right", true);
});
