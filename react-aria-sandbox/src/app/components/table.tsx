"use client";
import { Checkbox, Collection, useTableOptions } from "react-aria-components";

import {
  Cell,
  Column,
  ResizableTableContainer,
  Row,
  Table,
  TableBody,
  TableHeader,
} from "react-aria-components";

export const MyTable = () => {
  let columns = [
    { name: "Name", key: "name", isRowHeader: true },
    { name: "Type", key: "type" },
    { name: "Date Modified", key: "date" },
  ];

  let rows = [
    { id: 1, name: "Games", date: "6/7/2020", type: "File folder" },
    { id: 2, name: "Program Files", date: "4/7/2021", type: "File folder" },
    { id: 3, name: "bootmgr", date: "11/20/2010", type: "System file" },
    { id: 4, name: "log.txt", date: "1/18/20167", type: "Text Document" },
  ];

  return (
    <Table aria-label="Files">
      <TableHeader columns={columns}>
        {(column) => (
          <Column isRowHeader={column.isRowHeader}>{column.name}</Column>
        )}
      </TableHeader>
      <TableBody items={rows}>
        {(item) => (
          <Row columns={columns}>
            {(column) => {
              console.log("Row renderProp called with column1", column);
              console.log("Row renderProp called with column2", column.name);
              console.log("Row renderProp called with column3", column.key);
              return <Cell>{item[column.key]}</Cell>;
            }}
          </Row>
        )}
      </TableBody>
    </Table>
  );
};

export const MyTable2 = () => {
  return (
    <Table aria-label="Files" selectionMode="multiple">
      <TableHeader>
        <Column>
          <MyCheckbox />
        </Column>
        <Column isRowHeader>Name</Column>
        <Column>Type</Column>
        <Column>Date Modified</Column>
      </TableHeader>
      <TableBody>
        <Row>
          <Cell>
            <MyCheckbox />
          </Cell>
          <Cell>Games</Cell>
          <Cell>File folder</Cell>
          <Cell>6/7/2020</Cell>
        </Row>
        <Row>
          <Cell>
            <MyCheckbox />
          </Cell>
          <Cell>Program Files</Cell>
          <Cell>File folder</Cell>
          <Cell>4/7/2021</Cell>
        </Row>
        <Row>
          <Cell>
            <MyCheckbox />
          </Cell>
          <Cell>bootmgr</Cell>
          <Cell>System file</Cell>
          <Cell>11/20/2010</Cell>
        </Row>
        <Row>
          <Cell>
            <MyCheckbox />
          </Cell>
          <Cell>log.txt</Cell>
          <Cell>Text Document</Cell>
          <Cell>1/18/2016</Cell>
        </Row>
      </TableBody>
    </Table>
  );
};
function MyCheckbox() {
  return (
    <Checkbox slot="selection">
      {({ isIndeterminate }) => (
        <svg viewBox="0 0 18 18" aria-hidden="true">
          {isIndeterminate ? (
            <rect x={1} y={7.5} width={15} height={3} />
          ) : (
            <polyline points="1 9 7 14 15 4" />
          )}
        </svg>
      )}
    </Checkbox>
  );
}
