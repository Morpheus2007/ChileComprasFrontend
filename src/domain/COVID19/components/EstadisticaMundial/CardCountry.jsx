import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardActions,
  CardActionArea,
  Container,
} from "@material-ui/core/";
import ReactCountryFlag from "react-country-flag";
import Pagination from "../../../../helpers/forms/Pagination/Pagination";

export default function CardCountry(
  { countries, getSummaryCovid19ByCountryAction } = this.props
) {
  const dispatch = useDispatch();

  const [offset, setOffSet] = useState("");
  const [perPage] = useState(10);

  function handlePageClick(e) {
    const selectedPage = e.selected;
    const offSeted = selectedPage * perPage;

    setOffSet(offSeted);
  }

  function handleSetNameDialog(nameCountry) {
    dispatch(getSummaryCovid19ByCountryAction(nameCountry));
  }

  return (
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
          Casos Covid-19 Nivel Mundial
        </Typography>
        <Grid
          container
          spacing={2}
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          {countries &&
            countries.slice(offset, offset + perPage).map((elem) => (
              <Grid item xs={12} sm={4} md={4} key={countries.indexOf(elem)}>
                <Link
                  to={`/country/${elem.Country}`}
                  name="confirmar_regreso_bandeja"
                  style={{ textDecoration: "none" }}
                  title={`${elem.Country}`}
                >
                  <Card
                    style={{
                      minHeight: "100%",
                      maxWidth: "300px",
                      maxHeight: "200px",
                      minWidth: "300px",
                    }}
                  >
                    <CardActionArea
                      onClick={() => handleSetNameDialog(elem.Country)}
                    >
                      <ReactCountryFlag
                        countryCode={elem.CountryCode}
                        svg
                        style={{
                          width: "4em",
                          height: "4em",
                          marginTop: "2px",
                          marginLeft: "8px",
                          marginBottom: "-80px",
                        }}
                        title={elem.CountryCode}
                      />
                      <CardContent style={{ marginLeft: "70px" }}>
                        <Typography gutterBottom variant="h6" component="body">
                          {elem.Country}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          {`Casos Confirmados: ${elem.TotalConfirmed.toString().replace(
                            /\B(?=(\d{3})+(?!\d))/g,
                            "."
                          )}`}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          {`Total Muertes: ${elem.TotalDeaths.toString().replace(
                            /\B(?=(\d{3})+(?!\d))/g,
                            "."
                          )}`}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          {`Total Recuperados: ${elem.TotalRecovered.toString().replace(
                            /\B(?=(\d{3})+(?!\d))/g,
                            "."
                          )}`}
                        </Typography>
                      </CardActions>
                    </CardActionArea>
                  </Card>
                </Link>
              </Grid>
            ))}
        </Grid>
        {countries ? (
          <Pagination
            onPageChange={(e) => handlePageClick(e)}
            pageCount={countries.length && countries.length / perPage}
          ></Pagination>
        ) : (
          <div />
        )}
      </div>
    </Container>
  );
}
