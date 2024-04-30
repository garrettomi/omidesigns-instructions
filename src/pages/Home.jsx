import homeImage from "../assets/camera.jpg"
import BlockImage from "../components/BlockImage"
import Title from "../components/Title"
import BorderTextBlock from "../components/BorderTextBlock"
import LinkList from "../components/LinkList"


function Home() {

  return (
    <>
        <BlockImage src={homeImage} alt="A polaroid camera on a wedding table" />
        <section className="homepage-gutters">
          <Title text="ムービーの作り方" />
          <BorderTextBlock text="「Omi Designs」をお選び頂きましてありがとうございます。素敵なウェディングになることを願っております✧*" />
          <LinkList />
        </section>
    </>
  );
};

export default Home;
