export interface User {
  //User naam ka ek object h jiske andar kai sare keys h aur inka datatype likha h
  id?: number;
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  age?: number;
  isAdmin?: boolean;
  createdAt?: Date;
}
