var uniqueV, nameV, genderV, addressV, emailV, surname1, middleV;

function readFom() {
  uniqueV = document.getElementById("unique").value;
  nameV = document.getElementById("name").value;
  middleV = document.getElementById("middle").value;
  genderV = document.getElementById("gender").value;
  addressV = document.getElementById("address").value;
  emailV = document.getElementById("email").value;
  surname1 = document.getElementById("surname").value;
  Swal.fire("Data Read Succesfully!");
  console.log(uniqueV, nameV, addressV, genderV, middleV, surname1, emailV);
}

document.getElementById("insert").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + uniqueV)
    .set({
      unique: uniqueV,
      name: nameV,
      gender: genderV,
      address: addressV,
      email: emailV,
      surname: surname1,
      middle: middleV,
    });
    Swal.fire("Data Inserted Succesfully!");
  document.getElementById("unique").value = "";
  document.getElementById("name").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("address").value = "";
  document.getElementById("email").value = "";
  document.getElementById("surname").value = "";
  document.getElementById("middle").value = "";
};

document.getElementById("read").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + uniqueV)
    .on("value", function (snap) {
      document.getElementById("unique").value = snap.val().unique;
      document.getElementById("name").value = snap.val().name;
      document.getElementById("gender").value = snap.val().gender;
      document.getElementById("address").value = snap.val().address;
      document.getElementById("email").value = snap.val().email;
      document.getElementById("surname").value = snap.val().surname;
      document.getElementById("middle").value = snap.val().middle;
    });
};

document.getElementById("update").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + uniqueV)
    .update({
        // Unique ID: uniqueV,
      name: nameV,
      gender: genderV,
      address: addressV,
      email: emailV,
      surname: surname1,
      middle: middleV,
      unique: uniqueV,
    });
    Swal.fire("Data Updated Succesfully!");
  document.getElementById("unique").value = "";
  document.getElementById("name").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("address").value = "";
  document.getElementById("email").value = "";
  document.getElementById("surname").value ="";
  document.getElementById("middle").value ="";
};
document.getElementById("delete").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + uniqueV)
    .remove();
    Swal.fire("Data Deleted Succesfully!");
  document.getElementById("unique").value = "";
  document.getElementById("name").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("address").value = "";
  document.getElementById("email").value = "";
  document.getElementById("surname").value = "";
  document.getElementById("middle").value = "";
};