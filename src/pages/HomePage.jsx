import React, { useEffect } from "react";

// UI imports
import { Stack } from "@mui/system";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import CircularProgress from "@mui/material/CircularProgress";

// [block-chain] smart-contract related imports..
import {
  getDeployedCampaigns,
  getCampaignsSummary,
} from "../../utils/getCampaigns";

// local imports..
import NavBar from "../components/NavBar";
import CampaignCard from "../components/CampaignCard";

// service imports..
import axios from "axios";

const api_url = "http://localhost:4000/api/";

function HomePage() {
  // for navigation..
  const navigate = useNavigate();

  // hooks..
  const [campaignsList, setCampaignsList] = React.useState([]);

  useEffect(() => {
    // console.log("useEffect called");
    let ignore = false;
    // fetch the campaigns..
    const fetchData = async () => {
      const deployedCampaignsList = await getDeployedCampaigns(); // call the function to fetch the data
      // console.log(deployedCampaignsList);
      setCampaignsList(await getCampaignsSummary(deployedCampaignsList));
      console.log("fetched campaigns");
      console.log(campaignsList);
    };

    // fetch the data..
    fetchData();
    return () => {
      ignore = true; // to avoid rendering multiple times..
    };
  }, []);

  return (
    <Box className="App">
      <NavBar />
      {/* <Stack direction="row" spacing={2}></Stack> */}
      <CssBaseline />
      <Container
        component="main"
        sx={{ mt: 8, mb: 2 }}
        justifyContent="center"
        fullWidth
      >
        <Box sx={{ mb: 2 }}>
          <Typography
            variant="h3"
            sx={{ fontFamily: "Poppins", lineHeight: 1.6 }}
            component="h1"
            gutterBottom
          >
            Welcome to CrowdFunding
          </Typography>

          <Typography
            variant="body1"
            sx={{ fontFamily: "Roboto", lineHeight: 1.6 }}
          >
            {" "}
            Welcome to our crowdfunding platform, where ideas flourish and
            dreams find wings. Whether you're an entrepreneur with a
            groundbreaking product, a visionary artist seeking support for your
            next masterpiece, or a passionate advocate for social change, our
            platform provides the perfect launchpad for your endeavors. With the
            power of collective contributions, we believe in democratizing
            funding, enabling individuals from all walks of life to support
            projects they believe in. Join our vibrant community today, and
            together, let's turn aspirations into achievements, one pledge at a
            time
          </Typography>
        </Box>
        <Box sx={{ mt: 4, mb: 2 }}>
          <Stack>
            <Stack
              direction={"row"}
              justifyContent="space-between"
              alignItems="center"
              // width={10}
            >
              <Box>
                <Typography
                  variant="h5"
                  sx={{ fontFamily: "Poppins", lineHeight: 1.6 }}
                >
                  Take part in active campaigns..
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ fontFamily: "Poppins", lineHeight: 1.6 }}
                >
                  Top {campaignsList.length} recent campaigns..
                </Typography>
              </Box>
            </Stack>
            <Container sx={{ py: 2 }} fullWidth>
              {/* End hero unit */}
              {/* load as long as data is not fetched. */}
              {campaignsList.length == 0 && (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <CircularProgress color="primary" size={70} />
                </div>
              )}
              <Grid container spacing={4}>
                {campaignsList.map((activeCampaign, idx) => (
                  <Grid item key={idx} xs={12} sm={6} md={4}>
                    <CampaignCard details={activeCampaign} />
                  </Grid>
                ))}
              </Grid>
            </Container>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}

export default HomePage;
