import { forwardRef } from "react";

const SingleReport = forwardRef((report, innerRef) => {
  const { provided } = report;

  let saleTime;
  report.lastSaleTime === 0
    ? (saleTime = 0)
    : (saleTime = new Date(report.lastSaleTime).toUTCString());
  let updateTime = new Date(report.lastUpdated).toUTCString();

  return (
    <tr
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      className="align-middle"
    >
      <td>{report.id}</td>
      <td
        style={{
          position: "sticky",
          left: 0,
          backgroundColor: "rgba(207, 14, 104, 1)",
        }}
      >
        {report.symbol}
      </td>
      <td>{report.askPrice}</td>
      <td>{report.askSize}</td>
      <td>{report.lastSalePrice}</td>
      <td>{report.bidSize}</td>
      <td>{report.lastSalePrice}</td>
      <td>{report.lastSaleSize}</td>
      <td>{saleTime}</td>
      <td>{updateTime}</td>
      <td>{report.sector}</td>
      <td>{report.securityType}</td>
      <td>{report.volume}</td>
    </tr>
  );
});

export default SingleReport;
