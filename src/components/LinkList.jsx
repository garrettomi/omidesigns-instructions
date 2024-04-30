import ListItem from "./ListItem"

export default function LinkList() {
    return (
        <div className="px-32 py-10">
            <ul>
                <ListItem url="/はじめに" text="はじめに | Canva登録・テンプレートの受け取り方" />
                <ListItem url="/PC" text="【PC】基本操作" />
                <ListItem url="/iPhone" text="【iPhone】基本操作" />
                <ListItem url="/セーフティーゾーンについて" text="セーフティーゾーンについて" />
                <ListItem url="/説明動画" text="説明動画" />
                <ListItem url="/音楽について" text="音楽について" />
                <ListItem url="/ダウンロード" text="ダウンロード・DVD化" />
                <ListItem url="/コメント集" text="コメント集" />
                <ListItem url="/よくある質問" text="よくある質問（準備中）" />
            </ul>
        </div>
    );
};
