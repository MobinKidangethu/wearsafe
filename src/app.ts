export class App {
  yourInput = '';
  yourInputsArr = [];

/***** Adding the input to the list with regex, empty and duplicate value check ******/
  addYourInput() {
    var regex = /^[<>/:&+%;\"]|\.\w{2,4}$/;
    var isValid = regex.test(this.yourInput);
    if (!isValid) {
      if (this.yourInput && this.yourInput != '') {
        this.yourInputsArr.push(this.yourInput);
        let isDuplicate = this.hasDuplicatesArr(this.yourInputsArr)
        if (isDuplicate) {
          this.removeDuplicatesFromArr();
          this.launch_toast("The value you entered is already present in the list")
          this.yourInput = '';
          return;
        }
        else {
          this.removeDuplicatesFromArr();
        }
      }
      else {
        this.launch_toast("Please enter some value!, It's empty")
      }
    } else {
      this.launch_toast("This character is not allowed");
      this.yourInput = '';
      return;
    }

  }

  /***** Duplicate Value removal check function */
  removeDuplicatesFromArr() {
    let uniq = this.yourInputsArr.filter(function (value, index, array) {
      return array.indexOf(value) == index;
    });
    this.yourInputsArr = uniq;
  }
/**** delete the record from the input */
  removeInput(inputs) {
    this.yourInputsArr.forEach((item, index) => {
      if (item === inputs) this.yourInputsArr.splice(index, 1);
    });
  }
/****Identifying and removing the dupicating from the array */
  hasDuplicatesArr(array) {
    return (new Set(array)).size !== array.length;
  }

  // To display a toaster for the negative scenario
  launch_toast(error) {
    var x = document.getElementById("toast");
    x.classList.add("show");
    x.innerHTML = error;
    setTimeout(function () {
      x.classList.remove("show");
    }, 3000);
  }
}

