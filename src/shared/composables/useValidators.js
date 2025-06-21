import { helpers, required, minLength } from "@vuelidate/validators";

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

  return { required$, notEmpty$ };
};

export default useValidators;
