import ListItem from "./ListItem"

export default function List() {
    return (
        <ul>
        <li>
        <ListItem url="/" text="はじめに | Canva登録・テンプレートの受け取り方" />
        </li>
        <li>
        <ListItem url="/" text="【PC】基本操作" />
        </li>
        <li>
        <ListItem url="/" text="【iPhone】基本操作" />
        </li>
        <li>
        <ListItem url="/" text="セーフティーゾーンについて" />
        </li>
        <li>
        <ListItem url="/" text="説明動画" />
        </li>
        <li>
        <ListItem url="/" text="音楽について" />
        </li>
        <li>
        <ListItem url="/" text="ダウンロード・DVD化" />
        </li>
        <li>
        <ListItem url="/" text="コメント集" />
        </li>
        <li>
        <ListItem url="/" text="よくある質問（準備中）" />
        </li>
        </ul>
    );
};
