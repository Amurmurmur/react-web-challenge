import React from "react";
import { Doughnut } from "react-chartjs-2";

import BalanceWrapper from "./BalanceWrapper";
import AmountTitle from "./AmountTitle";
import AmountSubtitle from "./AmountSubtitle";
import ColumnWrapper from "./ColumnWrapper";

function BalanceRow({ totalSent, leftAvailable }) {
  return (
    <BalanceWrapper>
      <ColumnWrapper alignItems="flex-end">
        <div>
          <AmountTitle>£{totalSent}</AmountTitle>
        </div>
        <div>
          <AmountSubtitle>total sent</AmountSubtitle>
        </div>
      </ColumnWrapper>
      <ColumnWrapper>
        <Doughnut
          data={{
            datasets: [
              {
                data: [13500, 4500],
                backgroundColor: ["#FFB428", "#EAEAEE"]
              }
            ]
          }}
          options={{
            layout: {
              padding: {
                left: 10,
                right: 10,
                top: 0,
                bottom: 0
              }
            },
            responsive: false,
            tooltips: {
              callbacks: {
                title: function(tooltipItem, data) {
                  return data["labels"][tooltipItem[0]["index"]];
                },
                label: function(tooltipItem, data) {
                  return data["datasets"][0]["data"][tooltipItem["index"]];
                },
                afterLabel: function(tooltipItem, data) {
                  var dataset = data["datasets"][0];
                  var percent = Math.round(
                    (dataset["data"][tooltipItem["index"]] /
                      dataset["_meta"][0]["total"]) *
                      100
                  );
                  return "(" + percent + "%)";
                }
              }
            },
            maintainAspectRatio: false
          }}
          width={100}
          height={100}
        />
      </ColumnWrapper>
      <ColumnWrapper alignItems="flex-start">
        <div>
          <AmountTitle>£{leftAvailable}</AmountTitle>
        </div>
        <div>
          <AmountSubtitle>left available</AmountSubtitle>
        </div>
      </ColumnWrapper>
    </BalanceWrapper>
  );
}

export default BalanceRow;
