import ListItem from "./ListItem"

export default function LinkList() {
    return (
        <ul>
        <li>
        <ListItem url="/はじめに" text="はじめに | Canva登録・テンプレートの受け取り方" />
        </li>
        <li>
        <ListItem url="/PC" text="【PC】基本操作" />
        </li>
        <li>
        <ListItem url="/iPhone" text="【iPhone】基本操作" />
        </li>
        <li>
        <ListItem url="/セーフティーゾーンについて" text="セーフティーゾーンについて" />
        </li>
        <li>
        <ListItem url="/説明動画" text="説明動画" />
        </li>
        <li>
        <ListItem url="/音楽について" text="音楽について" />
        </li>
        <li>
        <ListItem url="/ダウンロード" text="ダウンロード・DVD化" />
        </li>
        <li>
        <ListItem url="/コメント集" text="コメント集" />
        </li>
        <li>
        <ListItem url="/よくある質問" text="よくある質問（準備中）" />
        </li>
        </ul>
    );
};
