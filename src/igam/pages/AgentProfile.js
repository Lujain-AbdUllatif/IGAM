import React from "react";
// Components
import Profile from "../components/Profile";
import TrioBtns from "../components/trioBtns";
import SearchLocal from "../components/SearchLocal";
import Table from "../components/Table";
import TableDataRow from "../components/TableDataRow";
import AssignPackgeForm from "../components/AssignPackageForm";
import { useFormRef } from "../custom-hooks";
import AgentForm from "../components/AgentForm";

export default function AgentProfile(props) {
  const [packageFormRef, handleFormDisplay] = useFormRef();
  const [editAgentFormRef, handleEditFormDisplay] = useFormRef();
  return (
    <div>
      <AgentForm formRef={editAgentFormRef} onClose={handleEditFormDisplay} />
      <AssignPackgeForm formRef={packageFormRef} onClose={handleFormDisplay} />
      <Profile
        type="agent"
        name="Radi Fahmi"
        phone="+972 12 345 6789"
        location="VillageX"
        onEdit={handleEditFormDisplay}
      />
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
