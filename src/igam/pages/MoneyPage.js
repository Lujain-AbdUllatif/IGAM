import React, { useState } from "react";
import { MoneyIcon } from "../icons";
import PageTitle from "../components/PageTitle";
import TrioBtns from "../components/trioBtns";
import StockMiniForm from "../components/StockMiniForm";
import SearchLocal from "../components/SearchLocal";
import Table from "../components/Table";
import TableDataRow from "../components/TableDataRow";
import AssignPackageForm from "../components/AssignPackageForm";
import { useFormRef } from "../custom-hooks";
export default function MoneyPage() {
  const [formRef, handleFormDisplay] = useFormRef();
  const [diplayedPackages, setDisplayedPackages] = useState("Delivered");
  return (
    <div className="main-container">
      <AssignPackageForm formRef={formRef} onClose={handleFormDisplay} />
      <PageTitle title="Money">
        <MoneyIcon className="title-icon" />
      </PageTitle>
      <StockMiniForm
        subTitleClassName="blue-igam"
        subTitleText="Donation Budget"
        inputPlaceholder="money..."
      />

      <TrioBtns
        onClick_3={handleFormDisplay}
        onClick_1={(e) => setDisplayedPackages("Delivered")}
        onClick_2={(e) => setDisplayedPackages("Assigned")}
        btn_3_display={true}
      />

      <div className="packges-data">
        <div className="packges-head">
          <h3 className="blue-igam">{diplayedPackages}</h3>
          <SearchLocal className="search-packges-local-container" />
        </div>
        <Table table_titles={["Date", "Location", "Family", "Amount"]}>
          <TableDataRow
            row_data={["dd/mm/yy", "location_1", "family_1", "100"]}
            agentDisplay={false}
          />
          <TableDataRow
            row_data={["dd/mm/yy", "location_2", "family_2", "100"]}
            agentDisplay={false}
          />
          <TableDataRow
            row_data={["dd/mm/yy", "location_3", "family_3", "100"]}
            agentDisplay={false}
          />
        </Table>
      </div>
    </div>
  );
}
