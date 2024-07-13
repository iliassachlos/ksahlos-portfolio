import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";
function ContactCard() {
    return (
        <Box mx={{ lg: 5 }}>
            <Box mt={{ xs: 2, md: 15, xl: 22 }} mb={{ md: 5 }}>
                <Stack direction="column">
                    <Typography align="left" variant="h5" fontWeight={500} fontSize={30}>
                        Contact
                    </Typography>
                    <Divider flexItem />
                    <Typography align="justify" my={2}>
                        Now, as you were able to get a picture of who I am, how I work and what I can do, it is up to
                        you to contact me and lay the foundation for a new and successful relationship.
                    </Typography>
                </Stack>
            </Box>
            <Box textAlign="left" mb={{ md: 10 }}>
                <Typography fontWeight={500} fontSize={20} my={1}>
                    Konstantinos Sahlos
                </Typography>
                <Grid container spacing={{ xs: 2, md: 1 }}>
                    <Grid item xs={6}>
                        <Typography>k.sahlos@gmail.com</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography>Eresos</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography>+30 (0) 693 700 0041</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography>Lesvos, Greece</Typography>
                    </Grid>
                </Grid>
            </Box>
            <Box textAlign="left" mt={{ xs: 4, md: 0 }} mb={{ xs: 8, md: 0 }}>
                <Typography align="left" variant="h5" fontWeight={500} fontSize={30}>
                    Or Find Me On Social Media
                </Typography>
                <Divider flexItem />
                <Stack direction="column" my={2} spacing={2}>
                    <Link
                        to="https://www.facebook.com/konstantinos.sahlos"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            color: "inherit",
                            textDecoration: "none",
                        }}
                    >
                        <Typography display="flex" alignItems="center" gap={1}>
                            <FacebookIcon />
                            Konstantinos Sahlos
                        </Typography>
                    </Link>
                    <Link
                        to="https://www.instagram.com/ksahlos_photo/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "inherit", textDecoration: "none" }}
                    >
                        <Typography display="flex" alignItems="center" gap={1}>
                            <InstagramIcon />
                            Ksahlos_Photo
                        </Typography>
                    </Link>
                </Stack>
            </Box>
        </Box>
    );
}

export default ContactCard;
