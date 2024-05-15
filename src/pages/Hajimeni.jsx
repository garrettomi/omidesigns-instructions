import { Link } from "react-router-dom";
import stepOne from "../assets/step-1.png";
import stepTwo from "../assets/step-2.png";

import ReferenceAccordion from "../components/layout/Accordion";

import Title from "../components/common/Title";
import SubTitle from "../components/common/SubTitle";
import SmallTitle from "../components/common/SmallTitle";
import List from "../components/common/List";
import ContentImage from '../components/common/ContentImage';
import ScrollToTop from "../components/common/ScrollToTop";

export default function Hajimeni() {
    return (
        <section className="page-format page-gutters">
            <Title text="はじめに | Canva登録・テンプレートの受け取り方" />
            {/* <ul>
                <li>
                    <Link to="#はじめに">はじめに</Link>
                </li>
                <li>
                    <Link to="#Canvaについて">Canvaについて</Link>
                </li>
                <li>
                    <Link to="#テンプレートへのアクセス">テンプレートへのアクセス</Link>
                </li>
            </ul> */}
            <SubTitle id="#はじめに" text="はじめに" />
            <SmallTitle id="#Canvaについて" text="Canvaについて" />
            <p>
                テンプレートのご使用にはCanva Proアカウントが必要です
            </p>
            <p>
                （Canva proは無料トライアルで30日間は無料でご利用いただけます）
            </p>
            <List />
            <SmallTitle id="#テンプレートへのアクセス" text="テンプレートへのアクセス" />
            <p>
                Step 1 : Proアカウントの作成
            </p>
            <p>
                <Link to="https://www.canva.com/ja_jp/affiliates/PECHIMARU/?clickId=QorzJc0DHxyKRC3w6FVG9zkkUkHTDB3UZ3dsUQ0&utm_medium=affiliate&utm_source=pechimaru_2611570&irgwc=1">
                    こちら
                </Link>
                をクリックしたら、アカウント作成のリンクに飛びます
            </p>
            <ContentImage src={stepOne} alt="Step 1 for Canva Pro" />
            <p>
                Step 2: テンプレートにアクセス
            </p>
            <p>
                作成したアカウント情報でCanvaにサインイン、商品のテンプレートリンクを取得してください
            </p>
            <ContentImage src={stepTwo} alt="Step 2 for Canva Pro" />
            <div className="py-20">
                <ReferenceAccordion />
            </div>
            <ScrollToTop />
        </section>
    );
};
