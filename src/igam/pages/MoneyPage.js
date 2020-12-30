import React from "react";
import { PackgeIcon, MoneyIcon } from "../icons";
import PageTitle from "../components/PageTitle";
import SubTitleInfo from "../components/SubTitleInfo";
import TrioBtns from "../components/trioBtns";
import { AddBtn } from "../components/customBtn";
import SearchLocal from "../components/SearchLocal";
import Table from "../components/Table";
import TableDataRow from "../components/TableDataRow";
import AddForm from "../components/AddForm";
export default function MoneyPage() {
  return (
    <div className="main-container">
      <PageTitle title="Money">
        <MoneyIcon className="title-icon" />
      </PageTitle>
      <div className="packges-info-control">
        <SubTitleInfo className="blue-igam" text="Donation Budget" />

        <AddForm placeholder="money..." />
      </div>

      <TrioBtns />

      <div className="packges-data">
        <div className="packges-head">
          <h3 className="blue-igam">Delivered</h3>
          <SearchLocal className="search-packges-local-container" />
        </div>
        <Table table_titles={["Date", "Location", "Family", "Package"]}>
          <TableDataRow
            row_data={["dd/mm/yy", "location_1", "family_1", "package_1"]}
          />
          <TableDataRow
            row_data={["dd/mm/yy", "location_2", "family_2", "package_2"]}
          />
          <TableDataRow
            row_data={["dd/mm/yy", "location_3", "family_3", "package_3"]}
          />
        </Table>
      </div>
    </div>
  );
}
