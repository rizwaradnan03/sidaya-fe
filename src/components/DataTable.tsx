import { Table } from "flowbite-react";

export const DataTable: React.FC<{ thead: any[]; tbody: any[] }> = ({
  thead,
  tbody,
}) => {
  return (
    <>
      <Table>
        <Table.Head>
          {thead.map((item, index) => (
            <>
              <Table.HeadCell>{index + 1}</Table.HeadCell>
              <Table.HeadCell>{item.name}</Table.HeadCell>
              <Table.HeadCell>{item.description}</Table.HeadCell>
            </>
          ))}
        </Table.Head>
        <Table.Body className="divide-y">
          {tbody.map((item, index) => (
            <Table.Row key={index + 1}>
              <Table.Cell>{item.name}</Table.Cell>
              <Table.Cell>{item.description}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </>
  );
};
