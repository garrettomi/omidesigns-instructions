import ListItem from "./ListItem"

export default function List () {
    return (
        <ul className="px-12 pt-5 pb-10">
            <ListItem text="ムービーは自動保存されます" />
            <ListItem text="同じアカウントでログインしていればPCでもiphoneでも確認ができます" />
            <ListItem text="ダウンロードしたデザインはお使いのデバイスのダウンロードフォルダに保存されます" />
        </ul>
    );
};
