import { DocumentDTO } from "./DocumentDTO";

export type CreateUserDTO = {
  email : string;
  password: string;
  name: string;
  phone: string;
  documentDTO : DocumentDTO;
  role: string;
}