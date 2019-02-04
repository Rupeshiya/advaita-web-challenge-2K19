export interface users {
  _id: string;
  name: string;
  username: string;
  password: string;
  email: string;
}
export interface responseFromApi {
  success: boolean;
  msg: string;
  token?: string;
  user?: users;
}
