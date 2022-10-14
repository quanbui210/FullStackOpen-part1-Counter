import React from "react";

const StatisticsLine = (props) => {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td> {props.text} </td>
            <td> {props.count} </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StatisticsLine;
