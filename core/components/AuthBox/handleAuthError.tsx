import React from "react";

export default function handleAuthError({
  error,
  setMessage,
  setShaking,
}: {
  error: {
    data: {
      code: number;
      message: string;
      stack: string;
    };
    status: number;
  };
  setMessage: (arg0: string) => void;
  setShaking: (arg0: boolean) => void;
}): void {
  const { code, message, stack } = error.data;

  console.log(error, message, message === "Incorrect email or password");

  setShaking(true);
  switch (message) {
    case "Incorrect email or password": {
      setMessage("Diese Kombination ist uns nicht bekannt.");
      return;
    }
    case "Auth.form.error.confirmed": {
      setMessage("Bitte bestätige Dein Konto.");
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
