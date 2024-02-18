import { Box, TextField } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { Search } from "@mui/icons-material";
import React, { SetStateAction } from "react";
import { CompanyData } from "../../types/companyData";
import { useForm } from "react-hook-form";

interface Props {
  setCurrentCompanyData: React.Dispatch<
    SetStateAction<CompanyData | undefined>
  >;
}

export default function SearchInput({ setCurrentCompanyData }: Props) {
  const form = useForm<{ nip: string }>({ defaultValues: { nip: "" } });

  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const fetchCompanyData = (nip: number) => {
    fetch(`http://localhost:3000/${nip}`)
      .then((res) => res.json())
      .then((data) => setCurrentCompanyData(data));
  };

  const onSubmit = (data: { nip: string }) => {
    fetchCompanyData(Number(data.nip));
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
      noValidate
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextField
        label="NIP"
        variant="outlined"
        required
        error={!!errors.nip}
        helperText={errors.nip?.message}
        {...register("nip", {
          required: "NIP is required!",
        })}
      />
      <IconButton type="submit" aria-label="search">
        <Search />
      </IconButton>
    </Box>
  );
}
