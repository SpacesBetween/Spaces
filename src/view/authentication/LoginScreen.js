import { Container } from "@mui/material";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "../../configuration/supabaseClient.js";
import { Box } from "@mui/material";

// can skip the sign-up part
// the box is not align to the center, with the container
export default function LoginScreen() {
  return (
      <Container
        maxWidth="xs"
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          backgroundColor: "",
          justifyBackground: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "35%",
            width: "100%",
            bgcolor: "#eaeaea",
            padding: "16px",
          }}
        >
          <Auth
            supabaseClient={supabase}
            appearance={{
              theme: ThemeSupa,
              style: {
                button: {
                  background: "white",
                  color: "black",
                  border: "white",
                },
              },
            }}
            providers={[]} // removes third-party authentication
          />
        </Box>
      </Container>
  );
}
