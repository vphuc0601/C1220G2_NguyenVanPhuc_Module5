export class Customer {
  id: number;
  idCustomer: string;
  name: string;
  dayOfBirth: string;
  email: string;
  address: string;
  idCard: string;
  phone: number;
  gender: string;

  constructor() {
    this.id = 0;
    this.idCustomer = '';
    this.name = '';
    this.dayOfBirth = '';
    this.email = '';
    this.address = '';
    this.idCard = '';
    this.phone = 0;
    this.gender = '';
  }
}
