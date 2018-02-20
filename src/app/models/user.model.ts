export class User
{
  public firstName = '';
  public lastName = '';
  public email = '';
  public password = '';
  public confirmPassword = '';
  public terms = false;

  constructor( data ?: {
    firstName ?: string,
    lastName ?: string,
    email ?: string,
    password ?: string,
    confirmPassword ?: string,
    terms ?: boolean
  }) {
    Object.assign(this, data || {});
  }
}
