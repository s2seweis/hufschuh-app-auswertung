import React from "react";

export default function handleAuthError(
  error,
  setMessage,
  setShaking,
  setErrorButton,
  sendEmailConfirmation
) {
  // wtf is strapi doing here?
  const errorCode = error.response.data.message[0].messages[0].id;
  const errorMessage = error.response.data.message[0].messages[0].message;

  // TODO source error messages from strapi

  setShaking(true);
  switch (errorCode) {
    case "Auth.form.error.invalid": {
      setMessage("Diese Kombination ist uns nicht bekannt.");
      return;
    }
    case "Auth.form.error.confirmed": {
      setMessage("Bitte bestätige Dein Konto.");
      setErrorButton(<button onClick={sendEmailConfirmation}>Mail erneut senden</button>);
      return;
    }
    case "Auth.form.error.email.taken": {
      //Email is already taken.
      setMessage("Diese Mail Adresse ist bereits in Nutzung.");
      return;
    }
    default: {
      console.error(error);
      setMessage("Ein unbekannter Fehler ist aufgetreten.");
      return;
    }
  }
}
