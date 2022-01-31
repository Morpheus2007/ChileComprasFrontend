import React, { Fragment } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import HomeIcon from "@material-ui/icons/Home";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Loader from "../../../../helpers/Loader/Loader";
import ReactCountryFlag from "react-country-flag";

const columns = [
  { field: "id", headerName: "ID", width: 150 },
  {
    field: "date",
    headerName: "Fecha",
    type: "date",
    width: 130,
  },
  { field: "active", headerName: "Casos Activos", width: 150 },
  { field: "confirmed", headerName: "Casos confirmados", width: 180 },
  { field: "deaths", headerName: " Muertes", width: 130 },
  { field: "recovered", headerName: "Recuperaciones", width: 160 },
];

export default function DataTable() {
  const summaryByCountry = useSelector(
    (state) => state.estadisticasCovid.summaryCountry
  );
  const loading = useSelector((state) => state.estadisticasCovid.loading);

  const codeCountry = useSelector(
    (state) => state.estadisticasCovid.codeCountry
  );
  const nameCountry = useSelector(
    (state) => state.estadisticasCovid.nameCountry
  );

  const rows = summaryByCountry.map(function (a) {
    return {
      id: a.CountryCode,
      date: a.Date.toString().substr(0, 10).split("-").reverse().join("/"),
      active: a.Active.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."),
      confirmed: a.Confirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."),
      deaths: a.Deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."),
      recovered: a.Recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."),
    };
  });
  return (
    <Fragment>
      {loading == false ? (
        <Container minWidth="md">
          <div style={{ height: 640, width: "78%", marginTop: "10px" }}>
            <Typography
              variant="h5"
              id="tableTitle"
              component="div"
              style={{
                marginLeft: "80px",

                textAlign: "center",
              }}
            >
              Estadistica País Casos Covid-19
            </Typography>
            <Button
              variant="contained"
              color="primary"
              href="#contained-buttons"
              style={{ fontSize: 16, float: "right" }}
            >
              <Link
                to="/"
                name="Volver al Inicio"
                title="Volver al Inicio"
                style={{ textDecoration: "none", color: "white" }}
              >
                <HomeIcon
                  style={{
                    fontSize: 25,
                    float: "left",
                    color: "white",
                  }}
                />
                Volver
              </Link>
            </Button>

            <ReactCountryFlag
              countryCode={codeCountry}
              svg
              style={{
                width: "4em",
                height: "4em",
                marginBottom: "10px",
                visibility: codeCountry != "" ? "visible" : "hidden",
              }}
              title={codeCountry}
            />

            <Typography
              variant="h5"
              id="tableTitle"
              component="div"
              style={{
                marginLeft: "80px",
                marginTop: "-60px",
                marginBottom: "30px",
              }}
            >
              {nameCountry}
            </Typography>
            <DataGrid rows={rows} columns={columns} />
          </div>
        </Container>
      ) : (
        <Container minWidth="md">
          <Loader />
        </Container>
      )}
      <div
        style={{
          marginTop: "-750px",
          marginLeft: "",
          float: "right",
        }}
      ></div>
    </Fragment>
  );
}
