import OmiDesignsLayout from "./layout/OmiDesignsLayout"

import homeImage from "./assets/camera.jpg"
import BlockImage from "./components/BlockImage"
import Title from "./components/Title"
import List from "./components/List"


function App() {

  return (
    <>
      <OmiDesignsLayout>
        <BlockImage src={homeImage} alt="A polaroid camera on a wedding table" />
        <Title text="ムービーの作り方" />
        <List />
      </OmiDesignsLayout>
    </>
  );
};

export default App;
