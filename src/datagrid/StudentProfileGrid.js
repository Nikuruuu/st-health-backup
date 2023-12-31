import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import StudentProfileModal from '../modal/StudentProfileModal.js'

const StudentsProfileGrid = () => {

  const [searchValue, setSearchValue] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const students = [
    {
        id: 1,
        stud_id: 101,
        name: 'Anna Smith',
        mobile: '987-654-3210',
        section: 'Magalang',
        grade: '1',
        gender: 'Female',
        status: 'Active'
      },
     
      {
        id: 2,
        stud_id: 102,
        name: 'Michael Johnson',
        mobile: '555-123-4567',
        section: 'Magalang',
        grade: '1',
        gender: 'Male',
        status: 'Inactive'
      },
     
      {
        id: 3,
        stud_id: 103,
        name: 'Emily Davis',
        mobile: '777-888-9999',
        section: 'Masunurin',
        grade: '1',
        gender: 'Female',
        status: 'Active'
      },
     
      {
        id: 4,
        stud_id: 104,
        name: 'David Miller',
        mobile: '444-555-6666',
        section: 'Masunurin',
        grade: '1',
        gender: 'Male',
        status: 'Active'
      },
     
      {
        id: 5,
        stud_id: 105,
        name: 'Olivia Martinez',
        mobile: '111-222-3333',
        section: 'Mabait',
        grade: '2',
        gender: 'Female',
        status: 'Active'
      },
     
      {
        id: 6,
        stud_id: 106,
        name: 'William Anderson',
        mobile: '888-999-0000',
        section: 'Mabait',
        grade: '2',
        gender: 'Male',
        status: 'Active'
      },
     
      {
        id: 7,
        stud_id: 107,
        name: 'Sophia Wilson',
        mobile: '333-444-5555',
        section: 'Magalang',
        grade: '2',
        gender: 'Female',
        status: 'Active'
      },
     
      {
        id: 8,
        stud_id: 108,
        name: 'Daniel Lee',
        mobile: '666-777-8888',
        section: 'Magalang',
        grade: '2',
        gender: 'Male',
        status: 'Active'
      },
     
      {
        id: 9,
        stud_id: 109,
        name: 'Isabella Taylor',
        mobile: '222-333-4444',
        section: 'Masunurin',
        grade: '2',
        gender: 'Female',
        status: 'Active'
      },
     
      {
         id: 10,
         stud_id: 110,
         name: 'James Martinez',
         mobile: '999-000-1111',
         section: 'Masunurin',
         grade: '2',
         gender: 'Male',
         status: 'Active'
      },
     
      {
         id: 11,
         stud_id: 111,
         name: 'Grace Johnson',
         mobile: '444-555-6666',
         section: 'Mabait',
         grade: '3',
         gender: 'Female',
         status: 'Active'
      },
     
      {
         id: 12,
         stud_id: 112,
         name: 'Joseph Brown',
         mobile: '111-222-3333',
         section: 'Mabait',
         grade: '3',
         gender: 'Male',
         status: 'Active'
      },
      
      {
         id: 13,
         stud_id: 113,
         name: 'Chloe Davis',
         mobile: '777-888-9999',
         section: 'Magalang',
         grade: '3',
         gender: 'Female',
         status: 'Active'
      },
     
      {
         id: 14,
         stud_id: 114,
         name: 'Liam Wilson',
         mobile: '555-123-4567',
         section: 'Magalang',
         grade: '3',
         gender: 'Male',
         status: 'Inactive'
      },
     
      {
         id: 15,
         stud_id: 115,
         name: 'Emma Smith',
         mobile: '987-654-3210',
         section: 'Masunurin',
         grade: '3',
         gender: 'Female',
         status: 'Active'
      },
     
      {
         id: 16,
         stud_id: 116,
         name: 'Noah Johnson',
         mobile: '888-999-0000',
         section: 'Masunurin',
         grade: '3',
         gender: 'Male',
         status: 'Active'
      },
     
      {
         id: 17,
         stud_id: 117,
         name: 'Ava Martinez',
         mobile: '333-444-5555',
         section: 'Mabait',
         grade: '4',
         gender: 'Female',
         status: 'Active'
      },
     
      {
         id: 18,
         stud_id: 118,
         name: 'Ethan Anderson',
         mobile: '666-777-8888',
         section: 'Mabait',
         grade: '4',
         gender: 'Male',
         status: 'Active'
      },
     
      {
         id: 19,
         stud_id: 119,
         name: 'Mia Taylor',
         mobile: '222-333-4444',
         section: 'Magalang',
         grade: '4',
         gender: 'Female',
         status: 'Active'
      },
     
      {
         id: 20,
         stud_id: 120,
         name: 'Alexander Lee',
         mobile: '999-000-1111',
         section: 'Magalang',
         grade: '4',
         gender: 'Male',
         status: 'Active'
      }
    // ... more user data
  ];

  const columns = [
    { field: 'stud_id', headerName: 'Stud ID', width: 100 },
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'mobile', headerName: 'Mobile Number', width: 150 },
    { field: 'section', headerName: 'Section', width: 150 },
    { field: 'grade', headerName: 'Grade Level', width: 150 },
    { field: 'gender', headerName: 'Gender', width: 150 },
    {
      
      field: 'status',
      headerName: 'Status',
      width: 150,
      renderCell: (params) => (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: '50%',
              backgroundColor: params.value === 'Active' ? 'green' : 'red',
              marginRight: 5,
            }}
          />
          {params.value}
        </div>
      ),
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => (
        <div>
        <IconButton onClick={() => handleAction(params.row.id)}>
            <EditIcon />
          </IconButton>
          <IconButton onClick={() => handleDelete(params.row.id)}>
            <DeleteOutlineIcon />
          </IconButton>
        </div>
      ),
    },
  ];

  const handleAction = (userId) => {
    // Implement your action logic here
    console.log(`Edit user with ID: ${userId}`);
  };

  const handleDelete = (userId) => {
    // Implement your delete logic here
    console.log(`Delete user with ID: ${userId}`);
  };

  const filteredStudents = students.filter(user => 
    user.id.toString().includes(searchValue) ||
    user.name.toLowerCase().includes(searchValue.toLowerCase()) ||
    user.mobile.includes(searchValue) ||
    user.section.toLowerCase().includes(searchValue.toLowerCase()) ||
    user.grade.toLowerCase().includes(searchValue.toLowerCase()) ||
    user.gender.toLowerCase().includes(searchValue.toLowerCase()) ||
    user.status.toLowerCase().includes(searchValue.toLowerCase())
  );

  const handleModalOpen = () => {
    console.log('Opening modal');
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    console.log('Closing modal');
    setIsModalOpen(false);
  };
  

  return (
    <div style={{ height: 500, width: '100%' }}>
       <div className="mb-4 flex justify-end items-center">
       <Button variant="contained" color="primary" onClick={handleModalOpen}>Add Student</Button>
       <div className="ml-2">
        <TextField
          label="Search"
          variant="outlined"
          size="small"
          value={searchValue}
          onChange={handleSearchChange}
        />
      </div>
      </div>
      <DataGrid 
      rows={filteredStudents}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 10,
          },
        },
      }}
      pageSizeOptions={[10]}
      checkboxSelection
      disableRowSelectionOnClick  
      />
      <StudentProfileModal isOpen={isModalOpen} onClose={handleModalClose} onCancel={handleModalClose} />
    </div>
  );
};

export default StudentsProfileGrid;
