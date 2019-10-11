import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getLeads, deleteLead } from "../../actions/leads";

const Leads = ({ leads, getLeads, deleteLead }) => {
  useEffect(() => {
    getLeads();
    // eslint-disable-next-line
  }, []);
  return (
    <Fragment>
      <h2>Leads list...</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {leads.map(lead => (
            <tr key={lead.id}>
              <td>{lead.id}</td>
              <td>{lead.name}</td>
              <td>{lead.email}</td>
              <td>{lead.message}</td>
              <td>
                <button
                  onClick={deleteLead.bind(this, lead.id)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

Leads.propTypes = {
  leads: PropTypes.array.isRequired,
  getLeads: PropTypes.func.isRequired,
  deleteLead: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  leads: state.leads.leads
});

export default connect(
  mapStateToProps,
  { getLeads, deleteLead }
)(Leads);
