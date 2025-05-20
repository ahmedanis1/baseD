import type { ColumnsType } from "antd/es/table";

interface Book {
    id?: string;
    volumeInfo: {
        title: string;
        authors?: string[];
        categories?: string[];
        averageRating?: number;
    };
}

const bookTableColumns: ColumnsType<Book> = [
    {
        title: "Title",
        dataIndex: ["volumeInfo", "title"],
        key: "title",
    },
    {
        title: "Author(s)",
        dataIndex: ["volumeInfo", "authors"],
        key: "authors",
        render: (authors?: string[]) => authors?.join(", ") || "N/A",
    },
    {
        title: "Genre",
        dataIndex: ["volumeInfo", "categories"],
        key: "categories",
        render: (categories?: string[]) => categories?.join(", ") || "N/A",
    },
    {
        title: "Rating",
        dataIndex: ["volumeInfo", "averageRating"],
        key: "rating",
        render: (rating?: number) => rating ?? "N/A",
    },
];

export default bookTableColumns;
