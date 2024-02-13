import { Box, TextField } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { Search } from "@mui/icons-material";
import React, { ChangeEvent, SetStateAction, useState } from "react";
import CompanyData from "../../types/companyData";

interface Props {
  setCurrentCompanyData: React.Dispatch<
    SetStateAction<CompanyData | undefined>
  >;
}

interface fetchResult {
  name: string;
  nip: string;
  residenceAddress: string;
  accountNumbers: string[];
}

export default function SearchInput({ setCurrentCompanyData }: Props) {
  const [nip, setNip] = useState(0);

  const onChangeInput = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setNip(Number(e.target.value));
  };

  const fetchCompanyData = (nip: number) => {
    fetch(`https://wl-api.mf.gov.pl/api/search/nip/${nip}?date=2024-02-02`)
      .then((res) => res.json())
      .then(({ result }: { result: { subject: fetchResult } }) => {
        const { subject } = result;

        setCurrentCompanyData({
          name: subject.name,
          NIP: Number(subject.nip),
          address: subject.residenceAddress,
          accountNumbers: subject.accountNumbers,
        });
      });
  };
  return (
    <Box
      component="form"
      sx={{
        p: "2px 4px",
        m: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TextField
        label="NIP"
        variant="outlined"
        onChange={(e) => onChangeInput(e)}
      />
      <IconButton
        type="button"
        aria-label="search"
        onClick={() => fetchCompanyData(nip)}
      >
        <Search />
      </IconButton>
    </Box>
  );
}
