import { DataGrid } from '@mui/x-data-grid'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button } from '@mui/material'

export const Analytic = () => {

  const [hoardings, sethoardings] = useState([])

  const getData = async () => {
    const res = await axios.get("/hordings/userscreens/" + localStorage.getItem("id"));
    sethoardings(res.data.data);
  }

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/hordings/${id}`);
      sethoardings(prev => prev.filter(item => item._id !== id));
    } catch (err) {
      console.error("Error deleting hoarding:", err);
    }
  }

  const columns = [
    { field: "hoardingDimension", headerName: "Dimension", width: 130 },
    { field: "hoardingType", headerName: "Type", width: 130 },
    { field: "Availablity_Status", headerName: "Status", width: 130 },
    { field: "hourlyRate", headerName: "Rate", width: 100 },
    { field: "hordingURL", headerName: "Image", width: 150 },
    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      renderCell: (params) => (
        <Button 
          variant="contained" 
          color="error" 
          onClick={() => handleDelete(params.row._id)}
        >
          Delete
        </Button>
      ),
    },
  ]

  useEffect(() => {
    getData();
  }, [])

  return (
    <div>
      <DataGrid
        sx={{ m: 2 }}
        columns={columns}
        rows={hoardings}
        getRowId={(row) => row._id}
        autoHeight
      />
    </div>
  )
}
