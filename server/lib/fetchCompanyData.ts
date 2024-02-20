import { CompanyDataFetchResult } from "../../types/companyData";

export default function fetchCompanyData(nip: number) {
  const currentDate = new Date().toISOString().slice(0, 10);

  return fetch(`${process.env.WHITE_LIST_URL}${nip}?date=${currentDate}`)
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
