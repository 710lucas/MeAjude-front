import { DocumentDTO } from "./DocumentDTO";

export interface User{
    id: number;
    name: string;
    email: string;
    phone: string;
    deleted: boolean;
    documentDTO: DocumentDTO;
    role: string;
    token: string;
}