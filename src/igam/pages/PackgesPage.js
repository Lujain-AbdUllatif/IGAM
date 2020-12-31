import React, { useRef } from "react";
import { PackgeIcon } from "../icons";
import PageTitle from "../components/PageTitle";
import SubTitleInfo from "../components/SubTitleInfo";
import TrioBtns from "../components/trioBtns";
import SearchLocal from "../components/SearchLocal";
import Table from "../components/Table";
import TableDataRow from "../components/TableDataRow";
import AddForm from "../components/AddForm";
import AssignPackageForm from "../components/AssignPackageForm";
import { useFormRef } from "../custom-hooks";
export default function PackgesPage() {
  const [formRef, handleFormDisplay] = useFormRef();
  return (
    <div className="main-container">
      <AssignPackageForm formRef={formRef} onClose={handleFormDisplay} />
      <PageTitle title="Packges">
        <PackgeIcon className="title-icon" text="Avialable Packges" />
      </PageTitle>
      <div className="packges-info-control">
        <SubTitleInfo className="blue-igam" text="Avialable Packages" />
        <AddForm placeholder="packages..." />
      </div>

      <TrioBtns onClick_3={handleFormDisplay} />

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
