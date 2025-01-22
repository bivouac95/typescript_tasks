function isEmployeeEmail(email: string, domen: string) {
  return email.endsWith(domen);
}

export { isEmployeeEmail };
