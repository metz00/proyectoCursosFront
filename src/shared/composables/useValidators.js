import { helpers, required, minLength, email } from "@vuelidate/validators";

const useValidators = () => {
  const required$ = helpers.withMessage(
    "Este campo no puede ir vacio",
    required
  );

  const isNotEmpty = (value) => {
    return value !== null && value !== "";
  };

  const notEmpty$ = () => {
    return helpers.withMessage("Este campo no puede ir vacio", isNotEmpty);
  };
  const email$ = () => helpers.withMessage("Debe ser un correo válido", email);
  const password$ = () =>
    helpers.withMessage(
      "La contraseña debe tener al menos 6 caracteres",
      minLength(6)
    );

      const maxImageSize$ = () =>
    helpers.withMessage(
      "La imagen debe pesar menos de 200 KB",
      (file) => !file || file.size <= 200 * 1024
    );

  return { required$, notEmpty$, email$, password$, maxImageSize$ };
};

export default useValidators;
