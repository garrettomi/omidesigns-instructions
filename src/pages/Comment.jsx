import Title from "../components/common/Title"
import SubTitle from '../components/common/SubTitle';
import HashLinkList from '../components/common/HashLinkList';
import ScrollToTop from '../components/common/ScrollToTop';
import ReferenceAccordion from '../components/layout/Accordion';

export default function Comment() {
    const items = [
        {
            text: "コメント集",
        },
        {
            text: "オープニングムービー",
            indent: "indent-5"
        },
        {
            text: "プロフィールムービー",
            indent: "indent-5"
        },
        {
            text: "幼少期",
            indent: "indent-10"
        },
        {
            text: "小学校時代",
            indent: "indent-10"
        },
        {
            text: "中学時代",
            indent: "indent-10"
        },
        {
            text: "高校時代",
            indent: "indent-10"
        },
        {
            text: "大学時代",
            indent: "indent-10"
        },
        {
            text: "社会人時代",
            indent: "indent-10"
        },
        {
            text: "お付き合い開始",
            indent: "indent-10",
        },
        {
            text: "ファミリー婚",
            indent: "indent-10",
        },
    ];

    return (
        <section className="page-gutters page-format">
            <Title text="コメント集" />
            <HashLinkList items={items} />
            <SubTitle idName="コメント集" text="コメント集" />
                <p>
                どんな風にコメント入れていけば分からない！というときはこちらをご参考にお使いください
                </p>
            <SubTitle idName="オープニングムービー" text="オープニングムービー" />
                <p>
                緊張しています温かく見守ってください&#40;笑&#41;
                </p>
                <p>
                写真は今より5キロ太ってます&#40;笑&#41;
                </p>
                <p>
                短い時間ですが楽しんでいって下さい♪︎
                </p>
                <p>
                今日はたくさん写真撮りましょう♥️
                </p>
                <p>
                皆様と会えるのを楽しみにしてました！
                </p>
                <p>
                たくさん食べて、たくさん飲んで、楽しんでください！
                </p>
                <p>
                やっと今日を迎える事が出来て嬉しいです！！
                </p>
                <p>
                みんなに会えるのを心待ちにしていました♡
                </p>
                <p>
                結婚式を皆さまに楽しんでもらえる様たくさんこだわりを詰め込みました
                </p>
                <p>
                Hobby スケボー スノボー 野球 ギター
                </p>
                <p>
                Like 食べること、ごろごろする、ミシン
                </p>
            <SubTitle idName="プロフィールムービー" text="プロフィールムービー" />
            <SubTitle idName="幼少期" text="幼少期" />
                <p>
                1991年2月18日山口にて誕生2300gと小さく生まれました。
                </p>
                <p>
                おばあちゃんの家に行くのが大好きでした。
                </p>
                <p>
                たくさんの愛情を受けてすくすく育ちました。
                </p>
                <p>
                愛想を振りまいてたくさん可愛がってもらいました
                </p>
                <p>
                いつもにぎやかで楽しい家族に囲まれて育ちました
                </p>
                <p>
                たくさん遊んでもらって、色々と連れて行ってもらいました
                </p>
                <p>
                お目目くりくり♪この頃の自分本当に可愛い！&#40;笑&#41;
                </p>
                <p>
                弟の○○が生まれてお姉ちゃんがになりました
                </p>
                <p>
                生まれたばかりの弟が可愛くて仕方がなかった‼︎
                </p>
                <p>
                兄とはたまに喧嘩もしますがよく一緒に遊びました。
                </p>
                <p>
                七五三で記念撮影
                </p>
                <p>
                友だちと幼稚園に一緒に行くのが楽しかった
                </p>
                <p>
                運動会では元気に活躍しました。
                </p>
                <p>
                父の仕事の関係で鳥取に引っ越しました。
                </p>
                <p>
                家族全員集合！
                </p>
            <SubTitle idName="小学校時代" text="小学校時代" />
                <p>
                野球中心の生活がスタート
                </p>
                <p>
                体を動かすのが大好きよく外で走っていました&#40;笑&#41;
                </p>
                <p>
                幼稚園～中学校までみんなが同級生
                </p>
                <p>
                英語が好きで英検に合格するために頑張りました。
                </p>
                <p>
                野球少年の○○、日焼けして真っ黒！練習キツかったな〜
                </p>
            <SubTitle idName="中学時代" text="中学時代" />
                <p>
                中学の修学旅行でディズニーシー！
                </p>
                <p>
                中学時代素敵な友人たちと過ごした中学高校の6年間♡
                </p>
                <p>
                テニス部で活動していて、夏場は真っ黒に
                </p>
                <p>
                中学ではソフトテニス部、高校では書道部
                </p>
            <SubTitle idName="高校時代" text="高校時代" />
                <p>
                野球人生の集大成‼︎
                </p>
                <p>
                最高の仲間に出会うことが出来ました
                </p>
                <p>
                体育祭や合唱祭に充実した高校生活を過ごしました。
                </p>
                <p>
                最高のクラスメイトと楽しい3年間を過ごせました
                </p>
            <SubTitle idName="大学時代" text="大学時代" />
                <p>
                念願の一人暮らし、高知県の洗礼を浴びました&#40;笑&#41;
                </p>
                <p>
                真面目でしっかり者の友人たちに支えられて、実習や研究、国家試験、採用試験を乗り越えました！
                </p>
                <p>
                卒業旅行は熱海とアメリカへ、熱海での男気ジャンケンがいい思い出！
                </p>
                <p>
                ○○大学に進学しました
                </p>
            <SubTitle idName="社会人時代" text="社会人時代" />
                <p>
                同僚や主任に支えられながら中学校教諭として仕事に励みました
                </p>
                <p>
                たくさんの教え子が会いに来てくれるのは本当に幸せです。
                </p>
                <p>
                福山での図書館司書勤務を生かして今は中学校で学校支援員として働いています。
                </p>
                <p>
                今は静岡で色々な人に支えられながら頑張っています！
                </p>
                <p>
                社会人になってからも続けている趣味のソフトボール、市大会優勝！
                </p>
                <p>
                BIGBANGの大ファンに!仕事後にコンサートに行くのが楽しみ♪
                </p>
                <p>
                社会人になりマラソンにハマりました！祝 フルマラソン完走
                </p>
                <p>
                職場のメンバーと毎年ビアガーデンに行くのが恒例でした☺︎
                </p>
                <p>
                父から教えてもらったゴルフは今でも続けています。
                </p>
                <p>
                温かい家族にはいつも支えられています。これからもよろしくね
                </p>
                <p>
                大切な家族は私の宝物、みんなこれからもよろしくね。
                </p>
            <SubTitle idName="お付き合い開始" text="お付き合い開始" />
                <p>
                教育実習で出会い、お付き合い開始
                </p>
                <p>
                すでにコロナ禍という事もありお家デートが多めでした。2人でシリーズもののドラマや映画たくさん見たね!
                </p>
                <p>
                2019年3月新郎の転勤により広島から東京へ・・・それでも遠距離恋愛頑張りました。
                </p>
                <p>
                初めての旅行は三重の答志島へ、伊勢海老を2人で4キロ食べました!美味しかった〜♪
                </p>
                <p>
                付き合っている間は、飲み会を週３ペースでしていました。ふたりとも飲むの大好き！
                </p>
                <p>
                お互いの両親との両家顔合わせ、緊張したけど楽しかった。
                </p>
                <p>
                これからも支え合い笑顔溢れる家庭を築いていきます
                </p>
                <p>
                結婚して早いもので一年が経ちますが、ケンカすることなく仲良く過ごしています。
                </p>
                <p>
                わたしたちは5月5日に入籍し、新しい生活をスタートしています
                </p>
            <SubTitle idName="ファミリー婚" text="ファミリー婚" />
                <p>
                チャームポイントは、にこにこ笑顔 ぷにぷにのほっぺ
                </p>
                <p>
                泣き顔は、男梅にそっくり
                </p>
                <p>
                なでなで、抱っこが大好き！みんな是非よろしく
                </p>
                <p>
                結婚式でもマイペースに楽しみますのでみなさま温かい目で見守ってください
                </p>
                <p>
                お腹に新しい命が宿りました
                </p>
                <p>
                妊娠発覚後から続いたつわりも今ではいい思い出です
                </p>
                <p>
                2022年8月5日髙橋家に新しい仲間が誕生 XXです!
                </p>
                <p>
                おそとであそぶのだいすき♡
                </p>
                <p>
                静かな時は大体イタズラしてます
                </p>
                <p>
                いつも助けてくれてありがとう
                </p>
                <p>
                どんどん家族が増えて賑やかになっていくね
                </p>
                <p>
                これからもみんな集まってわいわいしようね！！
                </p>
                <p>
                これからも三人で温かい家庭を築いていきます
                </p>
            <div className="py-20">
                <ReferenceAccordion />
            </div>
            <ScrollToTop />
        </section>
    );
};
