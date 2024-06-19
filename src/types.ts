export type ActiveUserDetails = {
    id:string;
      userName: string;
      accountNumber: string;
      accountBalance: string;
      email: string;
      organization:string;
      phoneNumber:string;
      createdAt:string;
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
  
   export type User = {
      organization: string;
      createdAt: string;
      userName: string;
      email: string;
      phoneNumber: string;
      id: string;
    };