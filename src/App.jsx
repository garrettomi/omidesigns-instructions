import OmiDesignsLayout from "./layout/OmiDesignsLayout"
import Home from "./pages/Home"
import Hajimeni from "./pages/Hajimeni";
import PC from "./pages/PC";
import SmartPhone from "./pages/SmartPhone";
import EndCredits from "./pages/EndCredits";
import SafetyZone from "./pages/SafetyZone";
import Setsumei from "./pages/Setsumei";
import Download from "./pages/Download";
import Content from "./pages/Content";
import FAQ from './pages/FAQ';


function App() {

  return (
    <>
      <OmiDesignsLayout>
        <Home />
        <Hajimeni />
        <PC />
        <SmartPhone />
        <EndCredits />
        <SafetyZone />
        <Setsumei />
        <Download />
        <Content />
        <FAQ />
      </OmiDesignsLayout>
    </>
  );
};

export default App;
