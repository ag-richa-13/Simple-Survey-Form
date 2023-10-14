document.getElementById("submit-button").addEventListener("click", function () {
  // Validate the form
  if (validateForm()) {
    // Get form values
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const dateOfBirth = document.getElementById("date-of-birth").value;
    const country = document.getElementById("country").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const profession = document.getElementById("profession").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;

    // Display the submission details in the popup
    document.getElementById("submission-details").innerHTML = `
                    <p><strong>First Name:</strong> ${firstName}</p>
                    <p><strong>Last Name:</strong> ${lastName}</p>
                    <p><strong>Date of Birth:</strong> ${dateOfBirth}</p>
                    <p><strong>Country:</strong> ${country}</p>
                    <p><strong>Gender:</strong> ${gender}</p>
                    <p><strong>Profession:</strong> ${profession}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Mobile Number:</strong> ${mobile}</p>
                `;

    // Display the popup
    document.getElementById("popup").style.display = "block";
  }
});

document.getElementById("close-popup").addEventListener("click", function () {
  // Close the popup and reset the form
  document.getElementById("popup").style.display = "none";
  document.getElementById("survey-form").reset();
});

document.getElementById("reset-button").addEventListener("click", function () {
  // Reset the form
  document.getElementById("survey-form").reset();
});

function validateForm() {
  // Add your validation logic here
  // Example: Check if email is valid
  const emailInput = document.getElementById("email");
  const email = emailInput.value;
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    emailInput.focus();
    return false;
  }

  // Add more validation as needed for other fields

  // If all validations pass, return true
  return true;
}
