import homeImage from "../assets/camera.jpg"
import BlockImage from "../components/layout/BlockImage"
import BorderTextBlock from "../components/layout/BorderTextBlock"
import IconCardContainer from "../components/layout/IconCardContainer"
import GridContainer from "../components/layout/GridContainer"

import { DesktopIcon, MobileIcon, MusicIcon, SlideShowIcon } from "../utils/SVGIcon"


function Home() {

  const iconCards = [
    { title: "はじめに | Canva登録・テンプレートの受け取り方", url: "/はじめに", icon: <SlideShowIcon />},
    { title: "【PC】基本操作", url: "/PC", icon: <DesktopIcon /> },
    { title: "【iPhone】基本操作", url: "/iPhone", icon: <MobileIcon /> },
    { title: "音楽について", url: "/音楽について", icon: <MusicIcon /> }
  ]

  const cards = [
    { title: "ダウンロード・DVD化", url: "/ダウンロード" },
    { title: "【PC】基本操作", url: "/PC" },
    { title: "【iPhone】基本操作", url: "/iPhone" },
    { title: "音楽について", url: "/音楽について" }
  ];

  return (
    <>
        <BlockImage src={homeImage} alt="A polaroid camera on a wedding table" />
          <BorderTextBlock firstSentence="ムービーテンプレートをご購入いただきありがとうございました" secondSentence="お困りの点はお気軽にお問い合わせください" />
        <section className="homepage-gutters">
          <h3 className="text-center text-xl font-bold mt-10 mb-10">基本操作についてはこちらから</h3>
          <IconCardContainer iconCards={iconCards} />
          <h3 className="text-center text-xl font-bold mt-10 mb-10">お役立ち情報</h3>
          <GridContainer cards={cards} />
        </section>
    </>
  );
};

export default Home;
