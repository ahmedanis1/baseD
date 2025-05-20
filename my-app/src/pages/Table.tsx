import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import TableComponent from "../components/table";
import { fetchBooks } from "../redux/booksAction";
import type { RootState, AppDispatch } from "../store";
import {BookTable} from "../types";
import {Input} from "antd";

const TablePage: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const { books, loading } = useSelector((state: RootState) => state.books);
    const [search, setSearch] = useState("");

    useEffect(() => {
        dispatch(fetchBooks());
    }, [ dispatch]);

    const filteredBooks = books.filter((book) =>
        book.volumeInfo.title.toLowerCase().includes(search.toLowerCase()) ||
        book.volumeInfo.authors?.some((author) =>
            author.toLowerCase().includes(search.toLowerCase())
        )
    );

    const handleRowDoubleClick = (record: BookTable) => {
        navigate(`/book/${record.id}`, { state: record });
    };

    return (
        <div className="table-container">
            <Input
                className="search-input"
                placeholder="Search by Title or Author"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <TableComponent
                books={filteredBooks}
                loading={loading}
                onRowDoubleClick={handleRowDoubleClick}
            />
        </div>
    );
};

export default TablePage;
