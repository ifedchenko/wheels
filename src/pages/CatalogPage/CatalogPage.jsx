import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CarList from "../../components/CarList/CarList";
import CarFilter from "../../components/CarFilter/CarFilter";
import {
  selectAdverts,
  selectIsMount,
  selectIsLoading,
  selectError,
  selectAllAdverts,
} from "../../redux/selectors";
import { fetchPaginatedCars, fetchAllCars } from "../../redux/operations";
import LoadingButton from "@mui/lab/LoadingButton";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import { Puff } from "react-loader-spinner";
import Box from "@mui/material/Box";

const Catalog = () => {
  const dispatch = useDispatch();

  const adverts = useSelector(selectAdverts);
  const allAdverts = useSelector(selectAllAdverts);
  const isMount = useSelector(selectIsMount);
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const [cars, setCars] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(true);

  const loadMoreCars = async () => {
    dispatch(fetchPaginatedCars(currentPage));
    setCurrentPage((prev) => prev + 1);
  };

  useEffect(() => {
    if (!isMount) {
      setIsLoading(true);
      dispatch(fetchAllCars());
      dispatch(fetchPaginatedCars(currentPage));
      setCurrentPage((prev) => prev + 1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, isMount]);

  useEffect(() => {
    if (adverts.length > 0) {
      setCars(adverts);
      setIsLoading(false);
    }
  }, [adverts]);

  return (
    <section className="container">
      <CarFilter setCars={setCars} cars={allAdverts} />
      {error ? (
        <Collapse in={open}>
          <Alert
            severity="warning"
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 9999,
            }}
          >
            <AlertTitle>Info</AlertTitle>
            There are no more cars available
          </Alert>
        </Collapse>
      ) : (
        <></>
      )}
      {isLoading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Puff loading={isLoading} size={100} color="#1976d2" />
        </Box>
      ) : (
        <>
          <CarList cars={cars} />
          {!isMount ? (
            <></>
          ) : (
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <LoadingButton
                sx={{
                  fontFamily: "Manrope",
                  fontSize: 14,
                  fontWeight: 600,
                  marginTop: 10,
                  marginBottom: 5,
                }}
                loading={loading}
                disabled={error}
                variant="outlined"
                onClick={loadMoreCars}
              >
                Load more
              </LoadingButton>
            </Box>
          )}
        </>
      )}
    </section>
  );
};
export default Catalog;
