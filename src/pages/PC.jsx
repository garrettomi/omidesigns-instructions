import HashLinkList from "../components/common/HashLinkList";

import firstPhoto from "../assets/共有マーク.png";
import secondPhoto from "../assets/テキスト-1.png";
import thirdPhoto from "../assets/テキスト-2.png";
import fourthPhoto from "../assets/upload.png";
import fifthPhoto from "../assets/写真の置き換え.png";
import sixthPhoto from"../assets/前面・背面へ移動-1.png";
import seventhPhoto from"../assets/前面・背面へ移動-2.png";
import eighthPhoto from "../assets/音楽の確認方法-1.png";
import ninthPhoto from "../assets/音楽の確認方法-2.png";
import tenthPhoto from "../assets/音楽の削除の仕方.png";
import eleventhPhoto from "../assets/音楽のエフェクト-1.png";
import twelfthPhoto from "../assets/音楽のエフェクト-2.png";
import thirteenthPhoto from "../assets/page-1.png";
import fourteenthPhoto from "../assets/page-2.png";
import fifteenthPhoto from "../assets/アニメーション-1.png";
import sixteenthPhoto from "../assets/アニメーション-2.png";
import seventeenthPhoto from "../assets/透明度-1.png";
import eighteenthPhoto from "../assets/透明度-2.png";
import nineteenthPhoto from "../assets/ロック.png";

import ReferenceAccordion from "../components/layout/Accordion";

import Title from "../components/common/Title";
import SubTitle from "../components/common/SubTitle";
import ContentImage from '../components/common/ContentImage';
import ScrollToTop from "../components/common/ScrollToTop";

export default function PC() {
    const items = [
        "画面の見方",
        "1.共有マーク",
        "2.素材",
        "3.テキスト",
        "4.アップロード",
        "基本の操作",
        "1.写真の置き換え",
        "2.前面・背面へ移動",
        "3.音楽について",
        "・音楽の確認方法",
        "・音楽の削除の仕方",
        "・音楽の置き換え",
        "・音楽のエフェクト（フェードイン、フェードアウト）",
        "4.ページの複製・追加",
        "5.アニメーション",
        "6.透明度",
        "7.ロック",
    ];

    return (
        <section className="page-format page-gutters">
            <Title text="【PC】基本操作" />
            <SubTitle text="【PC】基本操作" />
            <HashLinkList items={items} />
            <SubTitle idName="画面の見方" text="画面の見方" />
                <p>
                テンプレートを開くとまずこちらの画面が表示されます
                </p>
                <p>
                各アイコンについての説明は下記の通りです
                </p>
            <SubTitle idName="1.共有マーク" text="1.共有マーク" />
                <p>
                端末へのダウンロードやリンクの共有をすることが出来ます
                </p>
                <p>
                カップルで作業したい場合はこちらからリンクを共有ください
                </p>
            <ContentImage src={firstPhoto} alt="Step 1 for Canva Pro" />
            <SubTitle idName="2.素材" text="2.素材" />
            <p>
            図形やイラストなどの素材を追加することが出来ます
            </p>
            <p>
            「素材」のアイコンをクリックし検索窓より「ハート」などご希望のイメージを検索して頂くと、色々な素材が表示されますので気に入ったものを追加して下さい
            </p>
            <SubTitle idName="3.テキスト" text="3.テキスト" />
            <ContentImage src={secondPhoto} alt="First photo of instructions for text" />
            <p>
            文字を新たに追加したい時は、「テキスト」のアイコンをクリックし「見出しを追加」で新たに文字を追加出来ます
            </p>
            <ContentImage src={thirdPhoto} alt="Second photo of instructions for text" />
            <SubTitle idName="4.アップロード" text="4.アップロード" />
            <p>
            ご自身のカメラロールより写真・動画・音楽を追加することが出来ます。
            </p>
            <ContentImage src={fourthPhoto} alt="Instructions for upload" />
            <SubTitle idName="基本の操作" text="基本の操作" />
            <SubTitle idName="1.写真の置き換え" text="1.写真の置き換え" />
            <p>
            入れ替えたい写真をドラッグすることで、写真を変更出来ます
            </p>
            <p>
            また、写真・動画をドラッグするだけでアップロード可能です
            </p>
            <ContentImage src={fifthPhoto} alt="Instructions for photo" />
            <SubTitle idName="2.前面・背面へ移動" text="2.前面・背面へ移動" />
            <p>
            写真が隠れてしまったり、変更がうまくいかない場合に使用します
            </p>
            <p>
            Step.1 対象の写真をクリックし「配置」をタップします
            </p>
            <ContentImage src={sixthPhoto} alt="Instructions for video part 1" />
            <p>
            Step.2 「前面に移動」もしくは「背面へ移動」をクリックすることで、レイヤーを変更することが出来ます
            </p>
            <ContentImage src={seventhPhoto} alt="Instructions for video part 2" />
            <SubTitle idName="3.音楽について" text="3.音楽について" />
            <p>
            著作権フリーの曲リストについてはこちらをご覧ください
            </p>
            <SubTitle idName="・音楽の確認方法" text="・音楽の確認方法" />
            <p>
            画面下の紫のバーが音楽です
            </p>
            <p>
            クリックすると曲が表示されます
            </p>
            <ContentImage src={eighthPhoto} alt="Instructions for music part 1" />
            <ContentImage src={ninthPhoto} alt="Instructions for music part 2" />
            <SubTitle idName="・音楽の削除の仕方" text="・音楽の削除の仕方" />
            <p>
            紫のバーをクリック後、「1を削除」をクリックします
            </p>
            <ContentImage src={tenthPhoto} alt="Instructions for music part 3" />
            <p>
            音楽は別で再生する場合などに使えます
            </p>
            <SubTitle idName="・音楽の置き換え" text="・音楽の置き換え" />
            <p>
            写真の置き換えと同様です
            </p>
            <p>
            入れ替えたい音楽をドラッグすることで、音楽を変更出来ます
            </p>
            <SubTitle idName="・音楽のエフェクト（フェードイン、フェードアウト）" text="・音楽のエフェクト（フェードイン、フェードアウト）" />
            <p>
            右クリックでオーディオエフェクトを選択
            </p>
            <ContentImage src={eleventhPhoto} alt="Instructions for music effects part 1" />
            <p>
            音楽のフェードイン、フェードアウトの秒数を調整することが出来ます
            </p>
            <ContentImage src={twelfthPhoto} alt="Instructions for music effects part 2" />
            <SubTitle idName="4.ページの複製・追加" text="4.ページの複製・追加" />
            <p>
            ページの複製：クリックしたページと同じデザインのページを作成出来ます
            </p>
            <p>
            テンプレートのデザインを使いたい場合はこちらを使用してください
            </p>
            <p>
            ページの追加：空白のページを作成出来ます
            </p>
            <p>
            Step.1 ページの右上にある…ボタンをクリックします
            </p>
            <p>
            Step.2 「（1）を複製」をクリックします
            </p>
            <ContentImage src={thirteenthPhoto} alt="Page instructions part 1" />
            <p>
            ※Step.2 で「ページを追加」をクリックすると空白のページを追加することが出来ます
            </p>
            <ContentImage src={fourteenthPhoto} alt="Page instructions part 2" />
            <SubTitle idName="5.アニメーション" text="5.アニメーション" />
            <p>
            文字や写真の出方を変更することが出来ます
            </p>
            <p>
            Step.1 アニメーションを変更したいページや写真、テキストボックスをクリックします
            </p>
            <p>
            Step.2 丸3つが重なっているアイコンの「アニメート」をクリックします
            </p>
            <ContentImage src={fifteenthPhoto} alt="Animation instructions" />
            <p>
            Step.3 好みのアニメーションを選択します
            </p>
            <p>
            ※既にアニメーションが追加されている場合は、「アニメート」でなくアニメーションの名前（フェード・ブリーズなど）が記載されています
            </p>
            <ContentImage src={sixteenthPhoto} alt="Animation instructions part 2" />
            <SubTitle idName="6.透明度" text="6.透明度" />
            <p>
            写真の透け具合を変更することが出来ます
            </p>
            <p>
            Step.1 透明度を変更したい写真をクリックします
            </p>
            <p>
            Step.2 「透明度」のアイコンをクリックすると、透明度を調節することが出来ます
            </p>
            <ContentImage src={seventeenthPhoto} alt="Final instructions part 1" />
            <ContentImage src={eighteenthPhoto} alt="Final instructions part 2" />
            <SubTitle idName="7.ロック" text="7.ロック" />
            <p>
            作業をしやすくするため、こちらで素材をロックしていることがございます
            </p>
            <p>
            素材を動かせない場合は、素材の上に表示されるロックのアイコンをクリックしていただけましたら解除できます
            </p>
            <p>
            ご自身で作業している時も動いて欲しくない素材をロックすることで、作業しやすくなります
            </p>
            <ContentImage src={nineteenthPhoto} alt="Lock instructions" />
            <div className="py-20">
                <ReferenceAccordion />
            </div>
            <ScrollToTop />
        </section>
    );
};
