import LinkListItem from "./LinkListItem"

export default function LinkList() {
    return (
        <div className="py-10">
            <ul>
                {/* <LinkListItem url="/はじめに" text="はじめに | Canva登録・テンプレートの受け取り方" />
                <LinkListItem url="/PC" text="【PC】基本操作" />
                <LinkListItem url="/iPhone" text="【iPhone】基本操作" /> */}
                <LinkListItem url="/セーフティーゾーンについて" text="セーフティーゾーンについて" />
                <LinkListItem url="/説明動画" text="説明動画" />
                {/* <LinkListItem url="/音楽について" text="音楽について" /> */}
                <LinkListItem url="/ダウンロード" text="ダウンロード・DVD化" />
                <LinkListItem url="/コメント集" text="コメント集" />
                <LinkListItem url="/よくある質問" text="よくある質問（準備中）" />
            </ul>
        </div>
    );
};
