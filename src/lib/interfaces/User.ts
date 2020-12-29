interface IGeo {
  lat: string,
  lng: string,
};

interface IAdress {
  city: string,
  street: string,
  suite: string,
  zipcode: string,
  geo: IGeo,
};

interface ICompany {
  name: string,
  catchPhrase: string,
  bs: string,
};

export interface IUser {
  id: number,
  address: IAdress,
  company: ICompany,
  name: string,
  email: string,
  phone: string,
  username: string,
  website: string,
};
