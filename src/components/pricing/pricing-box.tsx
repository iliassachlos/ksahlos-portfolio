import { Box, Container, Divider, Paper, Stack, Typography } from "@mui/material";
import { orange } from "@mui/material/colors";

function PricingBox() {
    return (
        <Container>
            <Stack direction={{ xs: "column", md: "row" }} justifyContent="center" alignItems="center" mb={2}>
                {/* Box 1 */}
                <Box
                    px={{ md: 1, xl: 2 }}
                    py={{ xs: 1 }}
                    data-aos="zoom-in-up"
                    data-aos-duration="800"
                    data-aos-once="true"
                >
                    <Paper elevation={2} sx={{ width: { xs: "340px", md: "240px" }, py: 2 }}>
                        <Stack direction="column" justifyContent="center" alignItems="center" spacing={2}>
                            <Typography textAlign="center" fontWeight={500}>
                                Fine Art Prints
                            </Typography>
                            <Divider orientation="horizontal" flexItem />
                            <Typography textAlign="center" fontSize="14px">
                                (<span style={{ fontSize: 12 }}>from</span> 60€)
                            </Typography>
                            <Typography
                                textAlign="center"
                                fontSize="14px"
                                bgcolor="black"
                                color="white"
                                borderRadius="4px"
                                px={2}
                            >
                                A4
                            </Typography>
                            <Typography textAlign="center" fontSize="14px">
                                Fine Art 100% Cotton Museum Quality Paper
                            </Typography>
                            <Typography textAlign="center" fontSize="14px">
                                Signed By The Artist
                            </Typography>
                            <Typography textAlign="center" fontSize="14px">
                                Limited To 50 Numbered Copies
                            </Typography>
                            <Typography textAlign="center" fontSize="14px">
                                -
                            </Typography>
                            <Typography textAlign="center" fontSize="14px">
                                -
                            </Typography>
                            <Typography textAlign="center" fontSize="14px">
                                Printed Using Pigment Inks
                            </Typography>
                            <Typography textAlign="center" fontSize="14px">
                                (Shipped In Paper Tube)
                            </Typography>
                        </Stack>
                    </Paper>
                </Box>
                {/* Box 2 */}
                <Box
                    px={{ md: 1, xl: 2 }}
                    py={{ xs: 1 }}
                    data-aos="zoom-in-up"
                    data-aos-duration="800"
                    data-aos-delay="200"
                    data-aos-once="true"
                >
                    <Paper elevation={2} sx={{ width: { xs: "340px", md: "240px" }, py: 2 }}>
                        <Stack direction="column" justifyContent="center" alignItems="center" spacing={2}>
                            <Typography textAlign="center" fontWeight={500}>
                                Fine Art Prints
                            </Typography>
                            <Divider orientation="horizontal" flexItem />
                            <Typography textAlign="center" fontSize="14px">
                                (<span style={{ fontSize: 12 }}>from</span> 120€)
                            </Typography>
                            <Typography
                                textAlign="center"
                                fontSize="14px"
                                bgcolor="black"
                                color="white"
                                borderRadius="4px"
                                px={2}
                            >
                                A3
                            </Typography>
                            <Typography textAlign="center" fontSize="14px">
                                Fine Art 100% Cotton Museum Quality Paper
                            </Typography>
                            <Typography textAlign="center" fontSize="14px">
                                Signed By The Artist
                            </Typography>
                            <Typography textAlign="center" fontSize="14px">
                                Limited To 30 Numbered Copies
                            </Typography>
                            <Typography textAlign="center" fontSize="14px">
                                Certificate Of Authenticity
                            </Typography>
                            <Typography textAlign="center" fontSize="14px">
                                Hologram Verified
                            </Typography>
                            <Typography textAlign="center" fontSize="14px">
                                Printed Using Pigment Inks
                            </Typography>
                            <Typography textAlign="center" fontSize="14px">
                                (Shipped In Paper Tube)
                            </Typography>
                        </Stack>
                    </Paper>
                </Box>
                {/* Box 3 */}
                <Box
                    px={{ md: 1, xl: 2 }}
                    py={{ xs: 1 }}
                    data-aos="zoom-in-up"
                    data-aos-duration="800"
                    data-aos-delay="400"
                    data-aos-once="true"
                >
                    <Paper elevation={2} sx={{ width: { xs: "340px", md: "240px" }, py: 2 }}>
                        <Stack direction="column" justifyContent="center" alignItems="center" spacing={2}>
                            <Typography textAlign="center" fontWeight={500}>
                                Fine Art Prints
                            </Typography>
                            <Divider orientation="horizontal" flexItem />
                            <Typography textAlign="center" fontSize="14px">
                                (<span style={{ fontSize: 12 }}>from</span> 150€)
                            </Typography>
                            <Typography
                                textAlign="center"
                                fontSize="14px"
                                bgcolor="black"
                                color="white"
                                borderRadius="4px"
                                px={2}
                            >
                                A3+
                            </Typography>
                            <Typography textAlign="center" fontSize="14px">
                                Fine Art 100% Cotton Museum Quality Paper
                            </Typography>
                            <Typography textAlign="center" fontSize="14px">
                                Signed By The Artist
                            </Typography>
                            <Typography textAlign="center" fontSize="14px">
                                Limited To 30 Numbered Copies
                            </Typography>
                            <Typography textAlign="center" fontSize="14px">
                                Certificate Of Authenticity
                            </Typography>
                            <Typography textAlign="center" fontSize="14px">
                                Hologram Verified
                            </Typography>
                            <Typography textAlign="center" fontSize="14px">
                                Printed Using Pigment Inks
                            </Typography>
                            <Typography textAlign="center" fontSize="14px">
                                (Shipped In Paper Tube)
                            </Typography>
                        </Stack>
                    </Paper>
                </Box>
                {/* Box 4 */}
                <Box
                    px={{ md: 1, xl: 2 }}
                    py={{ xs: 1 }}
                    data-aos="zoom-in-up"
                    data-aos-duration="800"
                    data-aos-delay="600"
                    data-aos-once="true"
                >
                    <Paper elevation={2} sx={{ width: { xs: "340px", md: "240px" }, py: 2 }}>
                        <Stack direction="column" justifyContent="center" alignItems="center" spacing={2}>
                            <Typography textAlign="center" fontWeight={500}>
                                Fine Art Prints
                            </Typography>
                            <Divider orientation="horizontal" flexItem />
                            <Typography textAlign="center" fontSize="14px">
                                (<span style={{ fontSize: 12 }}>from</span> 200€)
                            </Typography>
                            <Typography
                                textAlign="center"
                                fontSize="14px"
                                bgcolor="black"
                                color="white"
                                borderRadius="4px"
                                px={2}
                            >
                                A2
                            </Typography>
                            <Typography textAlign="center" fontSize="14px">
                                Fine Art 100% Cotton Museum Quality Paper
                            </Typography>
                            <Typography textAlign="center" fontSize="14px">
                                Signed By The Artist
                            </Typography>
                            <Typography textAlign="center" fontSize="14px">
                                Limited To 10 Numbered Copies
                            </Typography>
                            <Typography textAlign="center" fontSize="14px">
                                Certificate Of Authenticity
                            </Typography>
                            <Typography textAlign="center" fontSize="14px">
                                Hologram Verified
                            </Typography>
                            <Typography textAlign="center" fontSize="14px">
                                Printed Using Pigment Inks
                            </Typography>
                            <Typography textAlign="center" fontSize="14px">
                                (Shipped In Paper Tube)
                            </Typography>
                        </Stack>
                    </Paper>
                </Box>
                {/* Box 5 */}
                <Box
                    px={{ md: 1, xl: 2 }}
                    py={{ xs: 1 }}
                    data-aos="zoom-in-up"
                    data-aos-duration="800"
                    data-aos-delay="800"
                    data-aos-once="true"
                >
                    <Paper elevation={2} sx={{ width: { xs: "340px", md: "240px" }, py: 2 }}>
                        <Stack direction="column" justifyContent="center" alignItems="center" spacing={2}>
                            <Typography textAlign="center" fontWeight={500}>
                                Fine Art Prints
                            </Typography>
                            <Divider orientation="horizontal" flexItem />
                            <Typography textAlign="center" fontSize="14px">
                                (Call For Price)
                            </Typography>
                            <Typography
                                textAlign="center"
                                fontSize="14px"
                                bgcolor={orange[400]}
                                color="white"
                                borderRadius="4px"
                                px={2}
                            >
                                Larger Sizes Available
                            </Typography>
                            <Typography textAlign="center" fontSize="14px">
                                Fine Art 100% Cotton Museum Quality Paper
                            </Typography>
                            <Typography textAlign="center" fontSize="14px">
                                Signed By The Artist
                            </Typography>
                            <Typography textAlign="center" fontSize="14px">
                                -
                            </Typography>
                            <Typography textAlign="center" fontSize="14px">
                                Certificate Of Authenticity
                            </Typography>
                            <Typography textAlign="center" fontSize="14px">
                                Hologram Verified
                            </Typography>
                            <Typography textAlign="center" fontSize="14px">
                                Printed Using Pigment Inks
                            </Typography>
                            <Typography textAlign="center" fontSize="14px">
                                (Shipped In Paper Tube)
                            </Typography>
                        </Stack>
                    </Paper>
                </Box>
            </Stack>
        </Container>
    );
}

export default PricingBox;
