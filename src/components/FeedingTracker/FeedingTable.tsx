import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import React from "react";
import {Feeding} from "../../types";
import FeedingTableRow from "./FeedingTableRow";


interface FeedingTableProps {
  feedings: Feeding[];
  onDelete: (id: string) => void;
}

const FeedingTable = ({feedings, onDelete}: FeedingTableProps) => (
  <TableContainer>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell align="left">
            <strong>Time</strong>
          </TableCell>
          <TableCell align="right">
            <strong>Amount (ml)</strong>
          </TableCell>
          <TableCell align="right">
            <strong>Type</strong>
          </TableCell>
          <TableCell align="right">
            <strong>Actions</strong>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {
          feedings.map(f => (
            <FeedingTableRow
              feeding={f}
              onDelete={onDelete}
            />
          ))
        }
      </TableBody>
    </Table>
  </TableContainer>
);


export default FeedingTable;