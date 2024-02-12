import { Card, CardContent, Typography, Container } from "@mui/material";

export default function CompanyDataCard() {
  return (
    <Container maxWidth="xs">
      <Card variant="outlined">
        <CardContent sx={{ textAlign: "center" }}>
          <Typography gutterBottom variant="h5" component="div">
            Company Name
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            NIP: 123456
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            Address: 123456
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            Acoount Number: 123456
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}
