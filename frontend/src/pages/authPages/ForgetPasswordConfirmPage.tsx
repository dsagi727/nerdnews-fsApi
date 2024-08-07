import FormConfirmation from '../../features/auth/FormConfirmation';

function ForgetPasswordConfirm() {
  return (
    <FormConfirmation
      title="Elküldtük a jelszó visszaállító emailt a megadott címre!"
      message="Kérjük, kattints az emialben küldött linkre és adj meg egy új jelszót a sikeres visszaállításhoz!"
    />
  );
}

export default ForgetPasswordConfirm;
