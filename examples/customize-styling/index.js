import React from "react";
import MUIDataTable from "../../src/";
import {createMuiTheme, MuiThemeProvider, withStyles} from  '@material-ui/styles';
import classnames from 'classnames';

const customStyles = {
  BusinessAnalystRow: {
    '& td': {backgroundColor: "#F00"}
  },
  NameCell: {
    fontWeight: 900
  },
};

class Example extends React.Component {

  getMuiTheme = () => createMuiTheme({
    overrides: {
      MUIDataTable: {
        root: {
          backgroundColor: "#FF000",
        },
        paper: {
          boxShadow: "none",
        }
      },
      MUIDataTableBodyCell: {
        root: {
          backgroundColor: "#FFF"
        }
      }
    }
  });

  render() {
    const columns = [
      {
        name: "Name",
        options: {
          filter: true,
          setCellProps: (value) => {
            return {
              className: classnames(
                {
                  [this.props.classes.NameCell]: value === "Mel Brooks"
                })
            };
          }
        }
      },
      {
        name: "Title",
        options: {
          filter: true,
        }
      },
      {
        name: "Location",
        options: {
          filter: false,
        }
      },
      {
        name: "Age",
        options: {
          filter: true,
        }
      },
      {
        name: "Salary",
        options: {
          filter: true,
          sort: false
        }
      }
    ];

    const data = [
      ["Gabby George", "Business Analyst", "Minneapolis", 30, 100000],
      ["Aiden Lloyd", "Business Consultant", "Dallas", 55, 200000],
      ["Jaden Collins", "Attorney", "Santa Ana", 27, 500000],
      ["Franky Rees", "Business Analyst", "St. Petersburg", 22, 50000],
      ["Aaren Rose", "Business Consultant", "Toledo", 28, 75000],
      ["Blake Duncan", "Business Management Analyst", "San Diego", 65, 94000],
      ["Frankie Parry", "Agency Legal Counsel", "Jacksonville", 71, 210000],
      ["Lane Wilson", "Commercial Specialist", "Omaha", 19, 65000],
      ["Robin Duncan", "Business Analyst", "Los Angeles", 20, 77000],
      ["Mel Brooks", "Business Consultant", "Oklahoma City", 37, 135000],
      ["Harper White", "Attorney", "Pittsburgh", 52, 420000],
      ["Kris Humphrey", "Agency Legal Counsel", "Laredo", 30, 150000],
      ["Frankie Long", "Industrial Analyst", "Austin", 31, 170000],
      ["Brynn Robbins", "Business Analyst", "Norfolk", 22, 90000],
      ["Justice Mann", "Business Consultant", "Chicago", 24, 133000],
      ["Addison Navarro", "Business Management Analyst", "New York", 50, 295000],
      ["Jesse Welch", "Agency Legal Counsel", "Seattle", 28, 200000],
      ["Eli Mejia", "Commercial Specialist", "Long Beach", 65, 400000],
      ["Gene Leblanc", "Industrial Analyst", "Hartford", 34, 110000],
      ["Danny Leon", "Computer Scientist", "Newark", 60, 220000],
      ["Lane Lee", "Corporate Counselor", "Cincinnati", 52, 180000],
      ["Jesse Hall", "Business Analyst", "Baltimore", 44, 99000],
      ["Danni Hudson", "Agency Legal Counsel", "Tampa", 37, 90000],
      ["Terry Macdonald", "Commercial Specialist", "Miami", 39, 140000],
      ["Justice Mccarthy", "Attorney", "Tucson", 26, 330000],
      ["Silver Carey", "Computer Scientist", "Memphis", 47, 250000],
      ["Franky Miles", "Industrial Analyst", "Buffalo", 49, 190000],
      ["Glen Nixon", "Corporate Counselor", "Arlington", 44, 80000],
      ["Gabby Strickland", "Business Process Consultant", "Scottsdale", 26, 45000],
      ["Mason Ray", "Computer Scientist", "San Francisco", 39, 142000]
    ];

    const options = {
      filter: true,
      filterType: 'dropdown',
      responsive: 'stacked',
      setRowProps: (row) => {
        return {
          className: classnames(
            {
              [this.props.classes.BusinessAnalystRow]: row[1] === "Business Analyst"
            }),
          style: {border: '3px solid blue',}
        };
      }

    };

    return (
      <MuiThemeProvider theme={this.getMuiTheme()}>
        <MUIDataTable title={"ACME Employee list"} data={data} columns={columns} options={options}/>
      </MuiThemeProvider>
    );

  }
}

export default withStyles(customStyles, {name: "ExampleCard.js"})(Example);
