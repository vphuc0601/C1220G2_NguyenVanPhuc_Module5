import {CustomerType} from "./customer-type";
export class Customer {
  id: number;
  idCustomer: string;
  name: string;
  dateOfBirth: string;
  typeCustomer: number;
  phone: string;
  email: string;
  address: string;
  idCard: string;

  constructor() {
    this.id = 0;
    this.idCustomer = "";
    this.name = "";
    this.dateOfBirth = "";
    this.typeCustomer = 0;
    this.phone = "";
    this.email = "";
    this.address = "";
    this.idCard = "";
  }
}
