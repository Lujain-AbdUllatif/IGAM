import React from "react";
// Components
import Profile from "../components/Profile";
import TrioBtns from "../components/trioBtns";
import SearchLocal from "../components/SearchLocal";
import Table from "../components/Table";
import TableDataRow from "../components/TableDataRow";
import AssignPackgeForm from "../components/AssignPackageForm";
import { useFormRef } from "../custom-hooks";
export default function FamilyProfile(props) {
  const [formRef, handleFormDisplay] = useFormRef();
  return (
    <div>
      <AssignPackgeForm formRef={formRef} onClose={handleFormDisplay} />
      <Profile
        type="family"
        name="Hasan Hasanien"
        phone="+972 98 765 4321"
        location="VillageY"
      />
      <TrioBtns onClick_3={handleFormDisplay} />
      <div className="packges-data">
        <div className="packges-head">
          <h3 className="blue-igam">Delivered</h3>
          <SearchLocal className="search-packges-local-container" />
        </div>
        <Table table_titles={["Date", "Agent", "Package"]}>
          <TableDataRow
            row_data={["dd/mm/yy", "agent_1111111111111111111", "package_1"]}
          />
          <TableDataRow row_data={["dd/mm/yy", "agent_2", "package_2"]} />
          <TableDataRow row_data={["dd/mm/yy", "agent_3", "package_3"]} />
        </Table>
      </div>
    </div>
  );
}
