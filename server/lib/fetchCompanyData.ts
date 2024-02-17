import { CompanyDataFetchResult } from "../../types/companyData";

export default function fetchCompanyData(nip: number) {
  return fetch(`${process.env.WHITE_LIST_URL}${nip}?date=2024-02-02`)
    .then((res) => res.json())
    .then(({ result }: { result: { subject: CompanyDataFetchResult } }) => {
      const { subject } = result;

      return {
        name: subject.name,
        NIP: Number(subject.nip),
        address: subject.residenceAddress,
        accountNumbers: subject.accountNumbers,
      };
    });
}
