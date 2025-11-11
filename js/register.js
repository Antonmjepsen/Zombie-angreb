const inputs = document.querySelectorAll(
  "input[required]:not([type='radio']), textarea[required], select[required]"
);

function showError(element, message) {
  const existingError = element.parentElement.querySelector(".error-message");
  if (existingError) {
    existingError.remove();
  }

  const errorDiv = document.createElement("div");
  errorDiv.className = "error-message";
  errorDiv.textContent = message;

  element.parentElement.appendChild(errorDiv);
  element.style.borderColor = "red";
}

function clearError(element) {
  const errorDiv = element.parentElement.querySelector(".error-message");
  if (errorDiv) {
    errorDiv.remove();
  }
  element.style.borderColor = "";
}

inputs.forEach((input) => {
  input.addEventListener("invalid", function (event) {
    event.preventDefault();

    let message = "Dette felt er påkrævet";
    if (input.type === "email") {
      message = "Indtast venligst en gyldig email-adresse";
    } else if (input.type === "tel") {
      message = "Indtast venligst et gyldigt telefonnummer";
    } else if (input.type === "date") {
      message = "Vælg venligst en dato";
    }

    showError(this, message);
  });

  input.addEventListener("input", function () {
    clearError(this);
  });
});

const requiredRadio = document.querySelector('input[type="radio"][required]');
if (requiredRadio) {
  const radioName = requiredRadio.name;
  const allRadiosInGroup = document.querySelectorAll(
    `input[name="${radioName}"]`
  );

  allRadiosInGroup.forEach((radio) => {
    radio.addEventListener("invalid", function (event) {
      event.preventDefault();
    });
  });
}

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();

  document.querySelectorAll(".error-message").forEach((err) => err.remove());
  document.querySelectorAll("input, textarea").forEach((field) => {
    field.style.borderColor = "";
  });

  const bydelRadios = document.querySelectorAll('input[name="bydel"]');
  const bydelSelected = Array.from(bydelRadios).some((radio) => radio.checked);
  const bydelFieldset = document.querySelector(".bydel-grid");

  if (!bydelSelected) {
    const errorDiv = document.createElement("div");
    errorDiv.className = "error-message";
    errorDiv.textContent = "Vælg venligst en bydel";
    bydelFieldset.appendChild(errorDiv);
    bydelFieldset.style.borderColor = "red";
    return;
  }

  const isValid = this.checkValidity();

  if (!isValid) {
    inputs.forEach((input) => {
      if (!input.validity.valid) {
        let message = "Dette felt er påkrævet";
        if (input.type === "email" && input.validity.typeMismatch) {
          message = "Indtast venligst en gyldig email-adresse";
        }
        showError(input, message);
      }
    });

    const firstInvalid = this.querySelector(":invalid");
    if (firstInvalid && firstInvalid.type !== "radio") {
      firstInvalid.focus();
    }
  } else {
    if (bydelFieldset) {
      bydelFieldset.style.borderColor = "";
    }

    const formData = new FormData(this);

    const summarySection = document.querySelector("#form-summary");
    const summaryArticle = summarySection.querySelector("article");

    const bydelValue = formData.get("bydel");
    const bydelFormatted = bydelValue
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    summarySection.querySelector("h2").textContent = "Din indberetning";

    summaryArticle.innerHTML = `
      <h3>Personlige oplysninger</h3>
      <p><strong>Navn:</strong> ${formData.get("Navn")} ${formData.get(
      "Efternavn"
    )}</p>
      <p><strong>Email:</strong> ${formData.get("Email")}</p>
      <p><strong>Telefonnummer:</strong> ${formData.get("Tlf")}</p>
      
      <h3>Sighting information</h3>
      <p><strong>Dato:</strong> ${formData.get("dato")}</p>
      <p><strong>Bydel:</strong> ${bydelFormatted}</p>
      <p><strong>Adresse:</strong> ${
        formData.get("Adresse") || "Ikke angivet"
      }</p>
      
      <h3>Beskrivelse</h3>
      <p>${formData.get("Beskrivelse")}</p>
    `;

    summaryArticle.classList.remove("placeholder");

    summarySection.style.display = "block";

    summarySection.scrollIntoView({ behavior: "smooth", block: "start" });

    this.reset();

    document.querySelectorAll("input, textarea, fieldset").forEach((field) => {
      field.style.borderColor = "";
    });

    console.log("Form submitted successfully");
  }
});
