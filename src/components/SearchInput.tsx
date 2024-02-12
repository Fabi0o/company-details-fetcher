import { Box, TextField } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { Search } from "@mui/icons-material";

export default function SearchInput() {
  return (
    <Box
      component="form"
      sx={{
        p: "2px 4px",
        mt: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TextField label="NIP" variant="outlined" />
      <IconButton type="submit" aria-label="search">
        <Search />
      </IconButton>
    </Box>
  );
}
