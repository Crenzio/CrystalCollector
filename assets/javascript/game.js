var flavor = Math.floor((Math.random() * 6) + 0);

if (flavor === 0) {
  document.getElementById("fun").innerHTML = "Rock Gnomes";
  document.getElementById("fun2").innerHTML = "Rock Gnomes";
}
if (flavor === 1) {
  document.getElementById("fun").innerHTML = "Earth Djinn";
  document.getElementById("fun2").innerHTML = "Earth Djinn";
}
if (flavor === 2) {
  document.getElementById("fun").innerHTML = "Cyber Penguines";
  document.getElementById("fun2").innerHTML = "Cyber Penguines";
}
if (flavor === 3) {
  document.getElementById("fun").innerHTML = "Hamsters";
  document.getElementById("fun2").innerHTML = "Hamsters";
}
if (flavor === 4) {
  document.getElementById("fun").innerHTML = "Weirdos at the Comic Book Store";
  document.getElementById("fun2").innerHTML = "Weirdos at the Comic Book Store";
}
if (flavor === 5) {
  document.getElementById("fun").innerHTML = "Crystal Dragons";
  document.getElementById("fun2").innerHTML = "Crystal Dragons";
}

var money = 0;
var max = Math.floor((Math.random() * 100) + 19);

var crystal1 = Math.floor((Math.random() * 12) + 1);
var crystal2 = Math.floor((Math.random() * 12) + 1);
var crystal3 = Math.floor((Math.random() * 12) + 1);
var crystal4 = Math.floor((Math.random() * 12) + 1);

var wins = 0;
var loses = 0;

document.getElementById("wins").innerHTML = wins;
document.getElementById("loses").innerHTML = loses;

document.getElementById("money").innerHTML = money;
document.getElementById("max").innerHTML = max;
document.getElementById("target").innerHTML = max;
document.getElementById("target2").innerHTML = max;

$("#crystal1").click(function () {
  money = money + crystal1;
  document.getElementById("money").innerHTML = money;

});

$("#crystal2").click(function () {
  money = money + crystal2;
  document.getElementById("money").innerHTML = money;

});

$("#crystal3").click(function () {
  money = money + crystal3;
  document.getElementById("money").innerHTML = money;

});

$("#crystal4").click(function () {
  money = money + crystal4;
  document.getElementById("money").innerHTML = money;

});

$(".crystal").click(function () {
  if (money === max) {
    wins++;
    reset();
    resetW();
    document.getElementById("wins").innerHTML = wins;
  }

  if (money > max) {
    loses++;
    reset();
    document.getElementById("loses").innerHTML = loses;
  }
});

function reset() {
  flavor = Math.floor((Math.random() * 6) + 0);

  money = 0;
  max = Math.floor((Math.random() * 100) + 19);

  crystal1 = Math.floor((Math.random() * 12) + 1);
  crystal2 = Math.floor((Math.random() * 12) + 1);
  crystal3 = Math.floor((Math.random() * 12) + 1);
  crystal4 = Math.floor((Math.random() * 12) + 1);

  document.getElementById("money").innerHTML = money;
  document.getElementById("max").innerHTML = max;
  document.getElementById("target").innerHTML = max;
  document.getElementById("target2").innerHTML = max;

  if (flavor === 0) {
    document.getElementById("fun").innerHTML = "Rock Gnomes";
    document.getElementById("fun2").innerHTML = "Rock Gnomes";
  }
  if (flavor === 1) {
    document.getElementById("fun").innerHTML = "Earth Djinn";
    document.getElementById("fun2").innerHTML = "Earth Djinn";
  }
  if (flavor === 2) {
    document.getElementById("fun").innerHTML = "Cyber Penguines";
    document.getElementById("fun2").innerHTML = "Cyber Penguines";
  }
  if (flavor === 3) {
    document.getElementById("fun").innerHTML = "Hamsters";
    document.getElementById("fun2").innerHTML = "Hamsters";
  }
  if (flavor === 4) {
    document.getElementById("fun").innerHTML = "Weirdos at the Comic Book Store";
    document.getElementById("fun2").innerHTML = "Weirdos at the Comic Book Store";
  }
  if (flavor === 5) {
    document.getElementById("fun").innerHTML = "Crystal Dragons";
    document.getElementById("fun2").innerHTML = "Crystal Dragons";
  }

}

function resetW() {

}