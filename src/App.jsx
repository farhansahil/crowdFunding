// library and component imports..
import "./App.css";

// custom imports
// import Feed from "./components/Feed";
import { Box } from "@mui/material";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import CreateCampaignWrapper from "./pages/campaigns/CreateCampaignWrapper";
import FillCampaignDetails from "./pages/campaigns/FillCampaignDetails";
import ReviewCampaignDetails from "./pages/campaigns/ReviewCampaignDetails";

function App() {
  return (
    <Box className="App">
      <CreateCampaignWrapper />
    </Box>
  );
}

export default App;
