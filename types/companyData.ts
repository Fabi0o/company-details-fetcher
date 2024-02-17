interface CompanyData {
  name: string;
  NIP: number;
  address: string;
  accountNumbers: string[];
}

interface CompanyDataFetchResult {
  name: string;
  nip: string;
  residenceAddress: string;
  accountNumbers: string[];
}

export type { CompanyData, CompanyDataFetchResult };
