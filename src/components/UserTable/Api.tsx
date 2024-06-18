import axios from "axios";

export const axiosBase = axios.create({
    baseURL: 'https://api.json-generator.com/templates/CkwJz8zka-9C',
    headers: {
        'X-Custom-Header': 'Grace-effiong',
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: 'Bearer odbhs5imvzgkg9dvi8rw7bqfl25pa3oqws9sd8ih '
    }
});

export type ActiveUserDetails = {
    userName: string;
    accountNumber: string;
    accountBalance: string;
    email: string;
    profile:{
      firstName: string;
      lastName: string;
      address: string;
      avatar: string;
      bvn: string;
      currency: string;
      gender: string;
      phoneNumber: string;
    }
    education:{
      duration: string;
      employmentStatus: string;
      level: string;
      loanRepayment: string;
      sector: string;
      officeEmail: string;
      monthlyIncome: string[];
    }
    socials:{
      facebook: string;
      instagram: string;
      twitter: string;
    }
    guarantor:{
      address: string;
      firstName: string;
      gender: string;
      lastName: string;
      phoneNumber: string;
    }
  }