import React from "react";
import { Container, Typography } from "@mui/material";
import InfiniteScroll from 'react-infinite-scroll-component';
import {useDispatch} from "react-redux";
import {getDashboardData} from "../../store/dashboard/DashboardAction";

// ----------------------------------------------------------------------

export default function FinanceAccounting() {

    const dispatch = useDispatch();
    React.useEffect( ()=>{
        (async ()=>{
            try{
                await dispatch(getDashboardData({
                    apiParams: 'limit=5&&offset=5'
                }))
            }catch (e) {

            }
        })()
    },[])
  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Finance Accounting
      </Typography>
    </Container>
  );
}
