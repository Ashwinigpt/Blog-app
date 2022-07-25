export default function validate(errors, name, value) {
    switch (name) {
      case 'email':
        let emailError =
          value.indexOf('@') === -1 ? 'Email should contain @' : '';
        errors.email = emailError;
        break;
      case 'password':
        let passwordError = '';
        if (value.length < 7) {
          passwordError = "Password should be at-least 6 characters";
        }
        let re = /^.*(?=.{6,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/;
        if (!re.test(value)) {
          passwordError = 'Password must contain a letter and a number';
        }
        errors.password = passwordError;
        break;
      case 'username':
        let userNameError = value.length < 7 ? 'Username should be at-least 6 characters long' : '';
        errors.username = userNameError
      default:
        return errors;
    }
  }