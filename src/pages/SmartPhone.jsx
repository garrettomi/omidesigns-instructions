import HashLinkList from "../components/common/HashLinkList";

import firstPhoto from "../assets/mobile-1.png";
import secondPhoto from "../assets/mobile-2.png";
import thirdPhoto from "../assets/mobile-3.png";
import fourthPhoto from "../assets/mobile-4.png";
import fifthPhoto from "../assets/mobile-5.png";
import sixthPhoto from "../assets/mobile-6.png";
import seventhPhoto from "../assets/mobile-7.png";
import eighthPhoto from "../assets/mobile-8.png";
import ninthPhoto from "../assets/mobile-9.png";
import tenthPhoto from "../assets/mobile-10.png";
import eleventhPhoto from "../assets/mobile-11.png";
import twelfthPhoto from "../assets/mobile-12.png";
import thirteenthPhoto from "../assets/mobile-13.png";
import fourteenthPhoto from "../assets/mobile-14.png";
import fifteenthPhoto from "../assets/mobile-15.png";
import sixteenthPhoto from "../assets/mobile-16.png";
import seventeenthPhoto from "../assets/mobile-17.png";
import eighteenthPhoto from "../assets/mobile-18.png";
import nineteenthPhoto from "../assets/mobile-19.png";
import twentiethPhoto from "../assets/mobile-20.png";


import ReferenceAccordion from "../components/layout/Accordion";

import Title from "../components/common/Title";
import SubTitle from "../components/common/SubTitle";
import ContentImage from '../components/common/ContentImage';
import ScrollToTop from "../components/common/ScrollToTop";
import { HashLink } from "react-router-hash-link";

export default function SmartPhone() {
    const items = [
        {
            text: "画面の見方",
        },
        {
            text: "1.共有マーク",
            indent: "indent-5"
        },
        {
            text: "2.素材",
            indent: "indent-5"
        },
        {
            text: "3.テキスト",
            indent: "indent-5"
        },
        {
            text: "4.カメラロール",
            indent: "indent-5"
        },
        {
            text: "基本の操作",
        },
        {
            text: "1.写真の置き換え",
            indent: "indent-5"
        },
        {
            text: "2.前面・背面へ移動",
            indent: "indent-5"
        },
        {
            text: "3.音楽について",
            indent: "indent-5"
        },
        {
            text: "・音楽の確認方法",
            indent: "indent-5"
        },
        {
            text: "・音楽の削除の仕方",
            indent: "indent-5"
        },
        {
            text: "・音楽の置き換え",
            indent: "indent-5"
        },
        {
            text: "・音楽のエフェクト（フェードイン、フェードアウト）",
            indent: "indent-5"
        },
        {
            text: "4.ページの複製",
            indent: "indent-5"
        },
        {
            text: "5.アニメーション",
            indent: "indent-5"
        },
        {
            text: "6.透明度",
            indent: "indent-5"
        },
        {
            text: "7.ロック",
            indent: "indent-5"
        },
    ];

    return (
        <section className="page-format page-gutters">
            <Title text="【iPhone】基本操作" />
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
            <ContentImage src={secondPhoto} alt="First photo of instructions for text" />
            <SubTitle idName="3.テキスト" text="3.テキスト" />
            <p>
            文字を新たに追加したい時は、「テキスト」のアイコンをクリックし「見出しを追加」で新たに文字を追加出来ます
            </p>
            <ContentImage src={thirdPhoto} alt="Second photo of instructions for text" />
            <SubTitle idName="4.カメラロール" text="4.カメラロール" />
            <p>
            ご自身のカメラロールよりお写真・動画を追加することが出来ます。テンプレート内の写真を自身のお写真に入れ替えたい時は、後述の
            <HashLink 
                to={'#1.写真の置き換え'}
                className="hover:text-gray-500"
            >
                「写真の置き換え
            </HashLink>」
            をご覧下さい
            </p>
            <ContentImage src={fourthPhoto} alt="Instructions for upload" />
            <SubTitle idName="基本の操作" text="基本の操作" />
            <SubTitle idName="1.写真の置き換え" text="1.写真の置き換え" />
            <p>
            テンプレート内の写真・音楽を自身の素材に入れ替えたい時に使用します
            </p>
            <p>
            【iPhoneの場合】
            </p>
            <p>
            Step 1.入れ替えたい写真をクリックします
            </p>
            <p>
            Step 2.左下の置き換えのアイコンをクリックします
            </p>
            <ContentImage src={fifthPhoto} alt="Instructions for photo" />
            <p>
            Step 3.ご自身のカメラロールが開くので入れ替えたいお写真を選択して下さい
            </p>
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
            <SubTitle idName="・音楽の削除の仕方" text="・音楽の削除の仕方" />
            <ContentImage src={eighthPhoto} alt="Instructions for music part 1" />
            <p>
            紫のバーをクリック後、「1を削除」をクリックします
            </p>
            <p>
            音楽は別で再生する場合などに使えます
            </p>
            <SubTitle idName="・音楽の置き換え" text="・音楽の置き換え" />
            <p>
            写真の置き換えと同様です
            </p>
            <p>
            【iPhoneの場合】
            </p>
            <p>
            Step 1.紫のバーをクリックします
            </p>
            <ContentImage src={ninthPhoto} alt="Instructions for music part 2" />
            <p>
            Step 2.左下の置き換えのアイコンをクリックします
            </p>
            <ContentImage src={tenthPhoto} alt="Instructions for music part 3" />
            <p>
            Step 3.ご自身のアップロード欄が開くので入れ替えたい音楽を選択して下さい
            </p>
            <SubTitle idName="・音楽のエフェクト（フェードイン、フェードアウト）" text="・音楽のエフェクト（フェードイン、フェードアウト）" />
            <p>
            ツールバーの「エフェクト」をクリック
            </p>
            <ContentImage src={eleventhPhoto} alt="Instructions for music effects part 1" />
            <p>
            フェードイン、フェードアウトの項目が表示されるので、それぞれ好きな長さに調整しましょう
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
            <ContentImage src={thirteenthPhoto} alt="Page instructions part 1" />
            <p>
            Step.2 「すべてのページを表示」を選択します
            </p>
            <p>
            Step.3 「&#40;1&#41;を複製」をクリックします
            </p>
            <ContentImage src={fourteenthPhoto} alt="Page instructions part 2" />
            <p>
            ※Step.3で「ページを追加」をクリックすると空白のページを追加することが出来ます
            </p>
            <ContentImage src={fifteenthPhoto} alt="Page instructions" />
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
            <ContentImage src={sixteenthPhoto} alt="Animation instructions part 2" />
            <p>
            Step.3 好みのアニメーションを選択します
            </p>
            <p>
            ※既にアニメーションが追加されている場合は、「アニメート」でなくアニメーションの名前（フェード・ブリーズなど）が記載されています
            </p>
            <ContentImage src={seventeenthPhoto} alt="Final instructions part 1" />
            <SubTitle idName="6.透明度" text="6.透明度" />
            <p>
            写真の透け具合を変更することが出来ます
            </p>
            <p>
            Step.1 透明度を変更したい写真をクリックします
            </p>
            <ContentImage src={eighteenthPhoto} alt="Final instructions part 2" />
            <p>
            Step.2 「透明度」のアイコンをクリックすると、透明度を調節することが出来ます
            </p>
            <ContentImage src={nineteenthPhoto} alt="Lock instructions" />
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
            <ContentImage src={twentiethPhoto} alt="Lock instructions" />
            <div className="py-20">
                <ReferenceAccordion />
            </div>
            <ScrollToTop />
        </section>
    );
};
