// library and component imports..
import "./App.css";

// custom imports
// import Feed from "./components/Feed";
import { Box } from "@mui/material";
import CreateCampaignWrapper from "./pages/campaigns/CreateCampaignWrapper";
import FillCampaignDetails from "./pages/campaigns/FillCampaignDetails";
import ReviewCampaignDetails from "./pages/campaigns/ReviewCampaignDetails";
import HomePage from "./pages/HomePage";
import ViewCampaign from "./pages/campaigns/ViewCampaign";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// For wallet connection & usage..
import { UseWalletProvider } from "use-wallet";

function App() {
  return (
    <UseWalletProvider
      chainId={4}
      connectors={{
        walletconnect: {
          rpcUrl:
            "https://goerli.infura.io/v3/eaf842956c36444c8aaf54163a47e0d2",
        },
      }}
    >
      <Router>
          <Routes>
            <Route index element={<HomePage />} />
          
            <Route
              path="/create-campaign"
              element={
                // <AuthProtectedRoute>
                <FillCampaignDetails />
                // {/* </AuthProtectedRoute> */}
              }
            />
            <Route path="/campaign/*" element={<ViewCampaign />} />
          </Routes>
      
      </Router>
    </UseWalletProvider>
  );
}

export default App;
