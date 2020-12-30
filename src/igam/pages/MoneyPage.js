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
import AssignPackageForm from "../components/AssignPackageForm";
import { useFormRef } from "../custom-hooks";
export default function MoneyPage() {
  const [formRef, handleFormDisplay] = useFormRef();
  return (
    <div className="main-container">
      <AssignPackageForm formRef={formRef} onClose={handleFormDisplay} />
      <PageTitle title="Money">
        <MoneyIcon className="title-icon" />
      </PageTitle>
      <div className="packges-info-control">
        <SubTitleInfo className="blue-igam" text="Donation Budget" />

        <AddForm placeholder="money..." />
      </div>

      <TrioBtns onClick_3={handleFormDisplay} />

      <div className="packges-data">
        <div className="packges-head">
          <h3 className="blue-igam">Delivered</h3>
          <SearchLocal className="search-packges-local-container" />
        </div>
        <Table table_titles={["Date", "Location", "Family", "Amount"]}>
          <TableDataRow
            row_data={["dd/mm/yy", "location_1", "family_1", "100"]}
          />
          <TableDataRow
            row_data={["dd/mm/yy", "location_2", "family_2", "100"]}
          />
          <TableDataRow
            row_data={["dd/mm/yy", "location_3", "family_3", "100"]}
          />
        </Table>
      </div>
    </div>
  );
}
