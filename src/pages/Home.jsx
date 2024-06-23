import homeImage from "../assets/camera.jpg"
import BlockImage from "../components/layout/BlockImage"
import BorderTextBlock from "../components/layout/BorderTextBlock"
import IconCardContainer from "../components/layout/IconCardContainer"
import GridContainer from "../components/layout/GridContainer"

import { DesktopIcon, MobileIcon, MusicIcon, SlideShowIcon } from "../utils/SVGIcon"


function Home() {

  const iconCards = [
    { 
      title: "はじめに",
      titleLineTwo: "テンプレートの受け取り方",
      url: "/start", 
      icon: <SlideShowIcon />
    },
    { title: "【PC】基本操作", url: "/PC", icon: <DesktopIcon /> },
    { title: "【iPhone】基本操作", url: "/iPhone", icon: <MobileIcon /> },
    { 
      title: "音楽・著作権",
      url: "/music", 
      icon: <MusicIcon /> 
    }
  ]

  const cards = [
    { title: "ダウンロード・DVD化", url: "/download" },
    { title: "セーフティーゾーン", url: "/safety-zone" },
    { title: "説明動画", url: "/video-explanation" },
    { title: "みんなのコメント集", url: "/comments" }
  ];

  return (
    <>
        <BlockImage src={homeImage} alt="A polaroid camera on a wedding table" />
          <BorderTextBlock 
            firstSentence="ムービーテンプレートをご購入いただきありがとうございました" 
            secondSentence="お困りの点はお気軽にお問い合わせください" 
          />
            <section className="homepage-gutters animate-fadeIn">
              <h3 className="text-center text-xl mt-10 mb-10">ムービーテンプレートの使い方</h3>
                <IconCardContainer iconCards={iconCards} />
              <h3 className="text-center text-xl font-bold mt-10 mb-10">お役立ち情報</h3>
              <GridContainer cards={cards} />
            </section>
    </>
  );
};

export default Home;
