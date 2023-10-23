let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let input3 = document.getElementById("input3");
let input4 = document.getElementById("input4");
let input5 = document.getElementById("input5");
let input6 = document.getElementById("input6");
let input7 = document.getElementById("input7");
let input8 = document.getElementById("input8");
let input9 = document.getElementById("input9");
let input10 = document.getElementById("input10");
let input11 = document.getElementById("input11");
let input12 = document.getElementById("input12");
let input13 = document.getElementById("input13");
let input14 = document.getElementById("input14");
let input15 = document.getElementById("input15");
let input16 = document.getElementById("input16");
let input17 = document.getElementById("input17");
let input18 = document.getElementById("input18");
let input19 = document.getElementById("input19");
let input20 = document.getElementById("input20");
let input21 = document.getElementById("input21");
let input22 = document.getElementById("input22");
let input23 = document.getElementById("input23");
let input24 = document.getElementById("input24");
let input25 = document.getElementById("input25");
let input26 = document.getElementById("input26");
let input27 = document.getElementById("input27");

let answer1 = document.getElementById("answer1");
let answer2 = document.getElementById("answer2");
let answer3 = document.getElementById("answer3");
let answer4 = document.getElementById("answer4");
let answer5 = document.getElementById("answer5");
let total1 = document.getElementById("total1");

let answer6 = document.getElementById("answer6");
let answer7 = document.getElementById("answer7");
let answer8 = document.getElementById("answer8");
let answer9 = document.getElementById("answer9");
let answer10 = document.getElementById("answer10");
let total2 = document.getElementById("total2");

let answer11 = document.getElementById("answer11");
let answer12 = document.getElementById("answer12");
let answer13 = document.getElementById("answer13");
let answer14 = document.getElementById("answer14");
let answer15 = document.getElementById("answer15");
let total3 = document.getElementById("total3");

let answer16 = document.getElementById("answer16");
let answer17 = document.getElementById("answer17");
let answer18 = document.getElementById("answer18");
let answer19 = document.getElementById("answer19");
let answer20 = document.getElementById("answer20");
let total4 = document.getElementById("total4");

let answer21 = document.getElementById("answer21");
let answer22 = document.getElementById("answer22");
let answer23 = document.getElementById("answer23");
let answer24 = document.getElementById("answer24");
let answer25 = document.getElementById("answer25");
let total5 = document.getElementById("total5");

let answer26 = document.getElementById("answer26");
let answer27 = document.getElementById("answer27");
let answer28 = document.getElementById("answer28");
let answer29 = document.getElementById("answer29");
let answer30 = document.getElementById("answer30");
let total6 = document.getElementById("total6");

let answer31 = document.getElementById("answer31");
let answer32 = document.getElementById("answer32");
let answer33 = document.getElementById("answer33");
let answer34 = document.getElementById("answer34");
let answer35 = document.getElementById("answer35");

let answer36 = document.getElementById("answer36");
let answer37 = document.getElementById("answer37");
let answer38 = document.getElementById("answer38");
let total7 = document.getElementById("total7");

const handelTabel = () => {
  // answer one row
  answer1.textContent = input1.value;
  answer2.textContent = input2.value;
  answer3.textContent = input3.value;
  answer4.textContent = input4.value;
  answer5.textContent = input5.value;
  total1.textContent =
    parseInt(input1.value) +
    parseInt(input2.value) +
    parseInt(input3.value) +
    parseInt(input4.value) +
    parseInt(input5.value);

  // answer two row

  const ans =
    (parseInt(input24.value) * parseInt(input11.value)) /
    (parseInt(input11.value) +
      parseInt(input12.value) +
      parseInt(input13.value) +
      parseInt(input14.value) +
      parseInt(input15.value));

  console.log(ans);

  answer6.textContent = ans;

  answer7.textContent =
    (parseInt(input24.value) * parseInt(input12.value)) /
    (parseInt(input11.value) +
      parseInt(input12.value) +
      parseInt(input13.value) +
      parseInt(input14.value) +
      parseInt(input15.value));
  answer8.textContent =
    (parseInt(input24.value) * parseInt(input13.value)) /
    (parseInt(input11.value) +
      parseInt(input12.value) +
      parseInt(input13.value) +
      parseInt(input14.value) +
      parseInt(input15.value));
  answer9.textContent =
    (parseInt(input24.value) * parseInt(input14.value)) /
    (parseInt(input11.value) +
      parseInt(input12.value) +
      parseInt(input13.value) +
      parseInt(input14.value) +
      parseInt(input15.value));
  answer10.textContent =
    (parseInt(input24.value) * parseInt(input15.value)) /
    (parseInt(input11.value) +
      parseInt(input12.value) +
      parseInt(input13.value) +
      parseInt(input14.value) +
      parseInt(input15.value));
  total2.textContent = input24.value;

  //answer thrid row

  answer11.textContent =
    parseInt(input1.value) +
    (parseInt(input24.value) * parseInt(input11.value)) /
      (parseInt(input11.value) +
        parseInt(input12.value) +
        parseInt(input13.value) +
        parseInt(input14.value) +
        parseInt(input15.value));
  answer12.textContent =
    parseInt(input2.value) +
    (parseInt(input24.value) * parseInt(input12.value)) /
      (parseInt(input11.value) +
        parseInt(input12.value) +
        parseInt(input13.value) +
        parseInt(input14.value) +
        parseInt(input15.value));
  answer13.textContent =
    parseInt(input3.value) +
    (parseInt(input24.value) * parseInt(input13.value)) /
      (parseInt(input11.value) +
        parseInt(input12.value) +
        parseInt(input13.value) +
        parseInt(input14.value) +
        parseInt(input15.value));
  answer14.textContent =
    parseInt(input4.value) +
    (parseInt(input24.value) * parseInt(input14.value)) /
      (parseInt(input11.value) +
        parseInt(input12.value) +
        parseInt(input13.value) +
        parseInt(input14.value) +
        parseInt(input15.value));
  answer15.textContent =
    parseInt(input5.value) +
    (parseInt(input24.value) * parseInt(input15.value)) /
      (parseInt(input11.value) +
        parseInt(input12.value) +
        parseInt(input13.value) +
        parseInt(input14.value) +
        parseInt(input15.value));
  total3.textContent =
    parseInt(input1.value) +
    parseInt(input2.value) +
    parseInt(input3.value) +
    parseInt(input4.value) +
    parseInt(input5.value) +
    parseInt(input24.value);

  //answer fourth row
  answer16.textContent =
    parseInt(input1.value) +
    (parseInt(input24.value) * parseInt(input11.value)) /
      (parseInt(input11.value) +
        parseInt(input12.value) +
        parseInt(input13.value) +
        parseInt(input14.value) +
        parseInt(input15.value));
  answer17.textContent =
    parseInt(input2.value) +
    (parseInt(input24.value) * parseInt(input12.value)) /
      (parseInt(input11.value) +
        parseInt(input12.value) +
        parseInt(input13.value) +
        parseInt(input14.value) +
        parseInt(input15.value));
  answer18.textContent =
    ((parseInt(input1.value) +
      (parseInt(input24.value) * parseInt(input11.value)) /
        (parseInt(input11.value) +
          parseInt(input12.value) +
          parseInt(input13.value) +
          parseInt(input14.value) +
          parseInt(input15.value)) +
      parseInt(input2.value) +
      (parseInt(input24.value) * parseInt(input12.value)) /
        (parseInt(input11.value) +
          parseInt(input12.value) +
          parseInt(input13.value) +
          parseInt(input14.value) +
          parseInt(input15.value))) *
      parseInt(input18.value)) /
    (parseInt(input18.value) +
      parseInt(input19.value) +
      parseInt(input20.value));

  answer19.textContent =
    ((parseInt(input1.value) +
      (parseInt(input24.value) * parseInt(input11.value)) /
        (parseInt(input11.value) +
          parseInt(input12.value) +
          parseInt(input13.value) +
          parseInt(input14.value) +
          parseInt(input15.value)) +
      parseInt(input2.value) +
      (parseInt(input24.value) * parseInt(input12.value)) /
        (parseInt(input11.value) +
          parseInt(input12.value) +
          parseInt(input13.value) +
          parseInt(input14.value) +
          parseInt(input15.value))) *
      parseInt(input19.value)) /
    (parseInt(input18.value) +
      parseInt(input19.value) +
      parseInt(input20.value));
  answer20.textContent =
    ((parseInt(input1.value) +
      (parseInt(input24.value) * parseInt(input11.value)) /
        (parseInt(input11.value) +
          parseInt(input12.value) +
          parseInt(input13.value) +
          parseInt(input14.value) +
          parseInt(input15.value)) +
      parseInt(input2.value) +
      (parseInt(input24.value) * parseInt(input12.value)) /
        (parseInt(input11.value) +
          parseInt(input12.value) +
          parseInt(input13.value) +
          parseInt(input14.value) +
          parseInt(input15.value))) *
      parseInt(input20.value)) /
    (parseInt(input18.value) +
      parseInt(input19.value) +
      parseInt(input20.value));
  total4.textContent =
    parseInt(input1.value) +
    (parseInt(input24.value) * parseInt(input11.value)) /
      (parseInt(input11.value) +
        parseInt(input12.value) +
        parseInt(input13.value) +
        parseInt(input14.value) +
        parseInt(input15.value)) +
    (parseInt(input2.value) +
      (parseInt(input24.value) * parseInt(input12.value)) /
        (parseInt(input11.value) +
          parseInt(input12.value) +
          parseInt(input13.value) +
          parseInt(input14.value) +
          parseInt(input15.value)));

  //answer Fifth row
  answer21.textContent = "---";
  answer22.textContent = "---";
  answer23.textContent =
    parseInt(input3.value) +
    (parseInt(input24.value) * parseInt(input13.value)) /
      (parseInt(input11.value) +
        parseInt(input12.value) +
        parseInt(input13.value) +
        parseInt(input14.value) +
        parseInt(input15.value)) +
    ((parseInt(input1.value) +
      (parseInt(input24.value) * parseInt(input11.value)) /
        (parseInt(input11.value) +
          parseInt(input12.value) +
          parseInt(input13.value) +
          parseInt(input14.value) +
          parseInt(input15.value)) +
      parseInt(input2.value) +
      (parseInt(input24.value) * parseInt(input12.value)) /
        (parseInt(input11.value) +
          parseInt(input12.value) +
          parseInt(input13.value) +
          parseInt(input14.value) +
          parseInt(input15.value))) *
      parseInt(input18.value)) /
      (parseInt(input18.value) +
        parseInt(input19.value) +
        parseInt(input20.value));
  answer24.textContent =
    parseInt(input4.value) +
    (parseInt(input24.value) * parseInt(input14.value)) /
      (parseInt(input11.value) +
        parseInt(input12.value) +
        parseInt(input13.value) +
        parseInt(input14.value) +
        parseInt(input15.value)) +
    ((parseInt(input1.value) +
      (parseInt(input24.value) * parseInt(input11.value)) /
        (parseInt(input11.value) +
          parseInt(input12.value) +
          parseInt(input13.value) +
          parseInt(input14.value) +
          parseInt(input15.value)) +
      parseInt(input2.value) +
      (parseInt(input24.value) * parseInt(input12.value)) /
        (parseInt(input11.value) +
          parseInt(input12.value) +
          parseInt(input13.value) +
          parseInt(input14.value) +
          parseInt(input15.value))) *
      parseInt(input19.value)) /
      (parseInt(input18.value) +
        parseInt(input19.value) +
        parseInt(input20.value));
  answer25.textContent =
    parseInt(input5.value) +
    (parseInt(input24.value) * parseInt(input15.value)) /
      (parseInt(input11.value) +
        parseInt(input12.value) +
        parseInt(input13.value) +
        parseInt(input14.value) +
        parseInt(input15.value)) +
    ((parseInt(input1.value) +
      (parseInt(input24.value) * parseInt(input11.value)) /
        (parseInt(input11.value) +
          parseInt(input12.value) +
          parseInt(input13.value) +
          parseInt(input14.value) +
          parseInt(input15.value)) +
      parseInt(input2.value) +
      (parseInt(input24.value) * parseInt(input12.value)) /
        (parseInt(input11.value) +
          parseInt(input12.value) +
          parseInt(input13.value) +
          parseInt(input14.value) +
          parseInt(input15.value))) *
      parseInt(input20.value)) /
      (parseInt(input18.value) +
        parseInt(input19.value) +
        parseInt(input20.value));
  total5.textContent =
    parseInt(input3.value) +
    (parseInt(input24.value) * parseInt(input13.value)) /
      (parseInt(input11.value) +
        parseInt(input12.value) +
        parseInt(input13.value) +
        parseInt(input14.value) +
        parseInt(input15.value)) +
    ((parseInt(input1.value) +
      (parseInt(input24.value) * parseInt(input11.value)) /
        (parseInt(input11.value) +
          parseInt(input12.value) +
          parseInt(input13.value) +
          parseInt(input14.value) +
          parseInt(input15.value)) +
      parseInt(input2.value) +
      (parseInt(input24.value) * parseInt(input12.value)) /
        (parseInt(input11.value) +
          parseInt(input12.value) +
          parseInt(input13.value) +
          parseInt(input14.value) +
          parseInt(input15.value))) *
      parseInt(input18.value)) /
      (parseInt(input18.value) +
        parseInt(input19.value) +
        parseInt(input20.value)) +
    (parseInt(input4.value) +
      (parseInt(input24.value) * parseInt(input14.value)) /
        (parseInt(input11.value) +
          parseInt(input12.value) +
          parseInt(input13.value) +
          parseInt(input14.value) +
          parseInt(input15.value))) +
    ((parseInt(input1.value) +
      (parseInt(input24.value) * parseInt(input11.value)) /
        (parseInt(input11.value) +
          parseInt(input12.value) +
          parseInt(input13.value) +
          parseInt(input14.value) +
          parseInt(input15.value)) +
      parseInt(input2.value) +
      (parseInt(input24.value) * parseInt(input12.value)) /
        (parseInt(input11.value) +
          parseInt(input12.value) +
          parseInt(input13.value) +
          parseInt(input14.value) +
          parseInt(input15.value))) *
      parseInt(input19.value)) /
      (parseInt(input18.value) +
        parseInt(input19.value) +
        parseInt(input20.value)) +
    (parseInt(input5.value) +
      (parseInt(input24.value) * parseInt(input15.value)) /
        (parseInt(input11.value) +
          parseInt(input12.value) +
          parseInt(input13.value) +
          parseInt(input14.value) +
          parseInt(input15.value))) +
    ((parseInt(input1.value) +
      (parseInt(input24.value) * parseInt(input11.value)) /
        (parseInt(input11.value) +
          parseInt(input12.value) +
          parseInt(input13.value) +
          parseInt(input14.value) +
          parseInt(input15.value)) +
      parseInt(input2.value) +
      (parseInt(input24.value) * parseInt(input12.value)) /
        (parseInt(input11.value) +
          parseInt(input12.value) +
          parseInt(input13.value) +
          parseInt(input14.value) +
          parseInt(input15.value))) *
      parseInt(input20.value)) /
      (parseInt(input18.value) +
        parseInt(input19.value) +
        parseInt(input20.value));

  //answer six row

  answer26.textContent = "---";
  answer27.textContent = "---";
  answer28.textContent = parseInt(input21.value);
  answer29.textContent = parseInt(input22.value);
  answer30.textContent = parseInt(input23.value);
  total6.textContent =
    parseInt(input21.value) + parseInt(input22.value) + parseInt(input23.value);

  //answer seventh row
  answer31.textContent = "---";
  answer32.textContent = "---";
  answer33.textContent =
    (parseInt(input3.value) +
      (parseInt(input24.value) * parseInt(input13.value)) /
        (parseInt(input11.value) +
          parseInt(input12.value) +
          parseInt(input13.value) +
          parseInt(input14.value) +
          parseInt(input15.value)) +
      ((parseInt(input1.value) +
        (parseInt(input24.value) * parseInt(input11.value)) /
          (parseInt(input11.value) +
            parseInt(input12.value) +
            parseInt(input13.value) +
            parseInt(input14.value) +
            parseInt(input15.value)) +
        parseInt(input2.value) +
        (parseInt(input24.value) * parseInt(input12.value)) /
          (parseInt(input11.value) +
            parseInt(input12.value) +
            parseInt(input13.value) +
            parseInt(input14.value) +
            parseInt(input15.value))) *
        parseInt(input18.value)) /
        (parseInt(input18.value) +
          parseInt(input19.value) +
          parseInt(input20.value))) /
    parseInt(input21.value);
  answer34.textContent =
    (parseInt(input4.value) +
      (parseInt(input24.value) * parseInt(input14.value)) /
        (parseInt(input11.value) +
          parseInt(input12.value) +
          parseInt(input13.value) +
          parseInt(input14.value) +
          parseInt(input15.value)) +
      ((parseInt(input1.value) +
        (parseInt(input24.value) * parseInt(input11.value)) /
          (parseInt(input11.value) +
            parseInt(input12.value) +
            parseInt(input13.value) +
            parseInt(input14.value) +
            parseInt(input15.value)) +
        parseInt(input2.value) +
        (parseInt(input24.value) * parseInt(input12.value)) /
          (parseInt(input11.value) +
            parseInt(input12.value) +
            parseInt(input13.value) +
            parseInt(input14.value) +
            parseInt(input15.value))) *
        parseInt(input19.value)) /
        (parseInt(input18.value) +
          parseInt(input19.value) +
          parseInt(input20.value))) /
    parseInt(input22.value);
  answer35.textContent =
    (parseInt(input5.value) +
      (parseInt(input24.value) * parseInt(input15.value)) /
        (parseInt(input11.value) +
          parseInt(input12.value) +
          parseInt(input13.value) +
          parseInt(input14.value) +
          parseInt(input15.value)) +
      ((parseInt(input1.value) +
        (parseInt(input24.value) * parseInt(input11.value)) /
          (parseInt(input11.value) +
            parseInt(input12.value) +
            parseInt(input13.value) +
            parseInt(input14.value) +
            parseInt(input15.value)) +
        parseInt(input2.value) +
        (parseInt(input24.value) * parseInt(input12.value)) /
          (parseInt(input11.value) +
            parseInt(input12.value) +
            parseInt(input13.value) +
            parseInt(input14.value) +
            parseInt(input15.value))) *
        parseInt(input20.value)) /
        (parseInt(input18.value) +
          parseInt(input19.value) +
          parseInt(input20.value))) /
    parseInt(input23.value);
};
const handelAnswer = () => {
  answer36.textContent =
    (parseInt(input25.value) *
      (parseInt(input3.value) +
        (parseInt(input24.value) * parseInt(input13.value)) /
          (parseInt(input11.value) +
            parseInt(input12.value) +
            parseInt(input13.value) +
            parseInt(input14.value) +
            parseInt(input15.value)) +
        ((parseInt(input1.value) +
          (parseInt(input24.value) * parseInt(input11.value)) /
            (parseInt(input11.value) +
              parseInt(input12.value) +
              parseInt(input13.value) +
              parseInt(input14.value) +
              parseInt(input15.value)) +
          parseInt(input2.value) +
          (parseInt(input24.value) * parseInt(input12.value)) /
            (parseInt(input11.value) +
              parseInt(input12.value) +
              parseInt(input13.value) +
              parseInt(input14.value) +
              parseInt(input15.value))) *
          parseInt(input18.value)) /
          (parseInt(input18.value) +
            parseInt(input19.value) +
            parseInt(input20.value)))) /
    parseInt(input21.value);

  answer37.textContent =
    (parseInt(input26.value) *
      (parseInt(input4.value) +
        (parseInt(input24.value) * parseInt(input14.value)) /
          (parseInt(input11.value) +
            parseInt(input12.value) +
            parseInt(input13.value) +
            parseInt(input14.value) +
            parseInt(input15.value)) +
        ((parseInt(input1.value) +
          (parseInt(input24.value) * parseInt(input11.value)) /
            (parseInt(input11.value) +
              parseInt(input12.value) +
              parseInt(input13.value) +
              parseInt(input14.value) +
              parseInt(input15.value)) +
          parseInt(input2.value) +
          (parseInt(input24.value) * parseInt(input12.value)) /
            (parseInt(input11.value) +
              parseInt(input12.value) +
              parseInt(input13.value) +
              parseInt(input14.value) +
              parseInt(input15.value))) *
          parseInt(input19.value)) /
          (parseInt(input18.value) +
            parseInt(input19.value) +
            parseInt(input20.value)))) /
    parseInt(input22.value);

  answer38.textContent =
    (parseInt(input27.value) *
      (parseInt(input5.value) +
        (parseInt(input24.value) * parseInt(input15.value)) /
          (parseInt(input11.value) +
            parseInt(input12.value) +
            parseInt(input13.value) +
            parseInt(input14.value) +
            parseInt(input15.value)) +
        ((parseInt(input1.value) +
          (parseInt(input24.value) * parseInt(input11.value)) /
            (parseInt(input11.value) +
              parseInt(input12.value) +
              parseInt(input13.value) +
              parseInt(input14.value) +
              parseInt(input15.value)) +
          parseInt(input2.value) +
          (parseInt(input24.value) * parseInt(input12.value)) /
            (parseInt(input11.value) +
              parseInt(input12.value) +
              parseInt(input13.value) +
              parseInt(input14.value) +
              parseInt(input15.value))) *
          parseInt(input20.value)) /
          (parseInt(input18.value) +
            parseInt(input19.value) +
            parseInt(input20.value)))) /
    parseInt(input23.value);
  total7.textContent =
    (parseInt(input25.value) *
      (parseInt(input3.value) +
        (parseInt(input24.value) * parseInt(input13.value)) /
          (parseInt(input11.value) +
            parseInt(input12.value) +
            parseInt(input13.value) +
            parseInt(input14.value) +
            parseInt(input15.value)) +
        ((parseInt(input1.value) +
          (parseInt(input24.value) * parseInt(input11.value)) /
            (parseInt(input11.value) +
              parseInt(input12.value) +
              parseInt(input13.value) +
              parseInt(input14.value) +
              parseInt(input15.value)) +
          parseInt(input2.value) +
          (parseInt(input24.value) * parseInt(input12.value)) /
            (parseInt(input11.value) +
              parseInt(input12.value) +
              parseInt(input13.value) +
              parseInt(input14.value) +
              parseInt(input15.value))) *
          parseInt(input18.value)) /
          (parseInt(input18.value) +
            parseInt(input19.value) +
            parseInt(input20.value)))) /
      parseInt(input21.value) +
    (parseInt(input26.value) *
      (parseInt(input4.value) +
        (parseInt(input24.value) * parseInt(input14.value)) /
          (parseInt(input11.value) +
            parseInt(input12.value) +
            parseInt(input13.value) +
            parseInt(input14.value) +
            parseInt(input15.value)) +
        ((parseInt(input1.value) +
          (parseInt(input24.value) * parseInt(input11.value)) /
            (parseInt(input11.value) +
              parseInt(input12.value) +
              parseInt(input13.value) +
              parseInt(input14.value) +
              parseInt(input15.value)) +
          parseInt(input2.value) +
          (parseInt(input24.value) * parseInt(input12.value)) /
            (parseInt(input11.value) +
              parseInt(input12.value) +
              parseInt(input13.value) +
              parseInt(input14.value) +
              parseInt(input15.value))) *
          parseInt(input19.value)) /
          (parseInt(input18.value) +
            parseInt(input19.value) +
            parseInt(input20.value)))) /
      parseInt(input22.value) +
    (parseInt(input27.value) *
      (parseInt(input5.value) +
        (parseInt(input24.value) * parseInt(input15.value)) /
          (parseInt(input11.value) +
            parseInt(input12.value) +
            parseInt(input13.value) +
            parseInt(input14.value) +
            parseInt(input15.value)) +
        ((parseInt(input1.value) +
          (parseInt(input24.value) * parseInt(input11.value)) /
            (parseInt(input11.value) +
              parseInt(input12.value) +
              parseInt(input13.value) +
              parseInt(input14.value) +
              parseInt(input15.value)) +
          parseInt(input2.value) +
          (parseInt(input24.value) * parseInt(input12.value)) /
            (parseInt(input11.value) +
              parseInt(input12.value) +
              parseInt(input13.value) +
              parseInt(input14.value) +
              parseInt(input15.value))) *
          parseInt(input20.value)) /
          (parseInt(input18.value) +
            parseInt(input19.value) +
            parseInt(input20.value)))) /
      parseInt(input23.value);
};


const inputs = document.querySelectorAll('input')

inputs.forEach(input => {
  input.addEventListener('keydown', e => {
    console.log(e.key);
    if (isNaN(e.key) && e.key !== "Backspace") e.preventDefault();
  })
})