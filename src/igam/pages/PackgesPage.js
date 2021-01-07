import React, { useState } from "react";
import { PackgeIcon } from "../icons";
import PageTitle from "../components/PageTitle";
import StockMiniForm from "../components/StockMiniForm";
import TrioBtns from "../components/trioBtns";
import SearchLocal from "../components/SearchLocal";
import Table from "../components/Table";
import TableDataRow from "../components/TableDataRow";
import AssignPackageForm from "../components/AssignPackageForm";
import { useFormRef } from "../custom-hooks";
export default function PackgesPage() {
  const [formRef, handleFormDisplay] = useFormRef();
  const [displayedPackages, setDisplayedPackages] = useState("Delivered");

  return (
    <div className="main-container">
      <AssignPackageForm formRef={formRef} onClose={handleFormDisplay} />
      <PageTitle title="Packages">
        <PackgeIcon className="title-icon" text="Avialable Packages" />
      </PageTitle>

      <StockMiniForm
        subTitleClassName="blue-igam"
        subTitleText="Available Packages"
        inputPlaceholder="packages..."
      />
      {/* <div className="packges-info-control">
        <SubTitleInfo className="blue-igam" text="Avialable Packages" />
        <AddForm placeholder="packages..." />
      </div> */}

      <TrioBtns
        onClick_3={handleFormDisplay}
        onClick_1={(e) => setDisplayedPackages("Delivered")}
        onClick_2={(e) => setDisplayedPackages("Assigned")}
        btn_3_display={true}
      />

      <div className="packges-data">
        <div className="packges-head">
          <h3 className="blue-igam">{displayedPackages}</h3>
          <SearchLocal className="search-packges-local-container" />
        </div>
        <Table table_titles={["Date", "Location", "Family", "Package"]}>
          <TableDataRow
            row_data={["dd/mm/yy", "location_1", "family_1", "package_1"]}
            agentDisplay={false}
          />
          <TableDataRow
            row_data={["dd/mm/yy", "location_2", "family_2", "package_2"]}
            agentDisplay={false}
          />
          <TableDataRow
            row_data={["dd/mm/yy", "location_3", "family_3", "package_3"]}
            agentDisplay={false}
          />
        </Table>
      </div>
    </div>
  );
}
