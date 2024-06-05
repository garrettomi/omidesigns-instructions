import Title from "../components/common/Title";
import SubTitle from '../components/common/SubTitle';
import ContentImage from '../components/common/ContentImage';
import ScrollToTop from '../components/common/ScrollToTop';
import ReferenceAccordion from '../components/layout/Accordion';

import welcomeWedding from '../assets/welcome-wedding.png';

export default function SafetyZone() {
    return (
        <section className="page-gutters page-format">
            <Title text="セーフティーゾーンについて" />
            <SubTitle text="セーフティーゾーンについて" />
                <p>
                セーフティーゾーンとは？
                </p>
                <p>
                →確実に画面に映し出される範囲のことです
                </p>
                <p>
                ※テンプレートのデザインは基本的に80%に収まるように作成しています。
                </p>
                <p>
                会場によって指定はそれぞれですので、確認した上で作成することをおすすめいたします✏︎
                </p>
                <p>
                端の方に文字や写真を置くとDVDに変換するときに切れてしまいます。
                </p>
                <p>
                位置を調整しているときにガイド線が出ますのでその線の中に入っていれば
                </p>
                <p>
                切れてしまうことはありません。
                </p>
            <ContentImage src={welcomeWedding} alt="Picture of bride and groom" />
            <div className="py-20">
                <ReferenceAccordion />
            </div>
            <ScrollToTop />
        </section>
    );
};
