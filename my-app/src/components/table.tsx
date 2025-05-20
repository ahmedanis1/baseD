import React from "react";
import { Table, Spin } from "antd";
import bookTableColumns from '../utils/columns';
import '../styles/table.less';
import { TableComponentProps } from '../types';

const TableComponent: React.FC<TableComponentProps> = ({
   books,
   loading,
   onRowDoubleClick
}) => {
    return (
        <div>
            {loading ? (
                <Spin tip="Loading..." />
            ) : (
                <Table
                    columns={bookTableColumns}
                    dataSource={books.map((book, index) => ({
                        ...book,
                        key: book.id || index.toString(),
                    }))}
                    pagination={{ pageSize: 20 }}
                    bordered
                    onRow={(record) => ({
                        onDoubleClick: () => onRowDoubleClick?.(record),
                    })}
                />
            )}
        </div>
    );
};

export default TableComponent;
