import { Card, CardContent, Typography, Container } from "@mui/material";
import { CompanyData } from "../../types/companyData";

interface Props {
  currentCompanyData: CompanyData;
}

export default function CompanyDataCard({ currentCompanyData }: Props) {
  return (
    <Container maxWidth="xs">
      <Card variant="outlined">
        <CardContent sx={{ textAlign: "center" }}>
          <Typography gutterBottom variant="h5" component="div">
            {currentCompanyData.name}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            NIP: {currentCompanyData.NIP}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            Address: {currentCompanyData.address}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {currentCompanyData.accountNumbers.length > 1
              ? "Account Numbers:"
              : "Account Number:"}
          </Typography>
          <Typography gutterBottom component="ol">
            {currentCompanyData.accountNumbers.map((accNum) => (
              <li>{accNum}</li>
            ))}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}
