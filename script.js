// Determines the life stage for a given age.
function checkAgeGroup(age) {
  let group;

  if (typeof age !== "number" || Number.isNaN(age) || age < 0) {
    group = "invalid age";
  } else if (age <= 12) {
    group = "child";
  } else if (age <= 19) {
    group = "teenager";
  } else {
    group = "adult";
  }

  const message = age + " years old: " + group;

  console.log(message);
  alert(message);

  return group;
}

// Example calls (each shows an alert, so click OK to continue)
checkAgeGroup(8);
checkAgeGroup(15);
checkAgeGroup(30);