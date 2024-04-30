import homeImage from "../assets/camera.jpg"
import BlockImage from "../components/BlockImage"
import Title from "../components/Title"
import LinkList from "../components/LinkList"


function Home() {

  return (
    <>
        <BlockImage src={homeImage} alt="A polaroid camera on a wedding table" />
        <Title text="ムービーの作り方" />
        <LinkList />
    </>
  );
};

export default Home;
