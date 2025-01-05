import { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";

ModuleRegistry.registerModules([AllCommunityModule]);

const AgGrid = () => {
  const [rowData] = useState([
    {
      name: "Aarav Sharma",
      age: 29,
      email: "aarav.sharma@example.com",
      phone: {
        personal: "123-456-7890",
        official: "321-654-0987",
      },
      role: "Data Scientist",
      gender: "male",
    },
    {
      name: "Ishika Patel",
      age: 25,
      email: "ishika.patel@example.com",
      phone: {
        personal: "234-567-8901",
        official: "432-765-1098",
      },
      role: "UI/UX Designer",
      gender: "female",
    },
    {
      name: "Kabir Singh",
      age: 33,
      email: "kabir.singh@example.com",
      phone: {
        personal: "345-678-9012",
        official: "543-876-2109",
      },
      role: "Software Engineer",
      gender: "male",
    },
    {
      name: "Nisha Verma",
      age: 28,
      email: "nisha.verma@example.com",
      phone: {
        personal: "456-789-0123",
        official: "654-987-3210",
      },
      role: "Marketing Manager",
      gender: "female",
    },
    {
      name: "Rohan Mehta",
      age: 40,
      email: "rohan.mehta@example.com",
      phone: {
        personal: "567-890-1234",
        official: "765-098-4321",
      },
      role: "Operations Manager",
      gender: "male",
    },
    {
      name: "Ananya Rao",
      age: 27,
      email: "ananya.rao@example.com",
      phone: {
        personal: "678-901-2345",
        official: "876-109-5432",
      },
      role: "Product Manager",
      gender: "female",
    },
    {
      name: "Dev Kapoor",
      age: 35,
      email: "dev.kapoor@example.com",
      phone: {
        personal: "789-012-3456",
        official: "987-210-6543",
      },
      role: "Technical Lead",
      gender: "male",
    },
  ]);

  const [columnDefs] = useState([
    { field: "name", headerName: "NAME" },
    { field: "age", headerName: "AGE" },
    { field: "email", headerName: "EMAIL" },
    {
      headerName: "PHONE",
      headerClass: "bg-black text-white border-r border-gray-300",
      children: [
        { field: "phone.personal", headerName: "PERSONAL" },
        { field: "phone.official", headerName: "OFFICIAL" },
      ],
    },
    { field: "role", headerName: "ROLE" },
    { field: "gender", headerName: "GENDER" },
  ]);
  return (
    <div
      className="ag-theme-alpine table bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden"
      style={{ height: "300px", width: "100%" }}
    >
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={{
          sortable: true,
          filter: true,
          flex: 1,
          cellClass: "border-r border-gray-300",
          headerClass: "bg-black text-white border-r border-gray-300",
        }}
        rowClassRules={{
          "bg-gray-100": "node.rowIndex % 2 === 0",
          "bg-white": "node.rowIndex % 2 !== 0",
        }}
      />
    </div>
  );
};

export default AgGrid;
