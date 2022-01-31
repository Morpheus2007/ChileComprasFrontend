import React, { PureComponent } from "react";
import { connect } from "react-redux";
import {
  getSummaryCovid19Action,
  getSummaryCovid19ByCountryAction,
} from "../../action/index";
import CardCountry from "./CardCountry";
import Container from "@material-ui/core/Container";

class GlobalView extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getSummaryCovid19Action();
  }

  render() {
    const { summary } = this.props;

    return (
      <Container maxWidth="lg">
        <div>
          {summary && (
            <CardCountry
              countries={summary}
              getSummaryCovid19ByCountryAction={
                getSummaryCovid19ByCountryAction
              }
            ></CardCountry>
          )}
        </div>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    summary: state.estadisticasCovid ? state.estadisticasCovid.summary : "",
  };
};

const mapDispatchToProps = {
  getSummaryCovid19Action,
};

GlobalView = connect(mapStateToProps, mapDispatchToProps)(GlobalView);

export default GlobalView;
