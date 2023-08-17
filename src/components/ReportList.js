import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import { Table } from "react-bootstrap";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { addReports } from "../store/reports/reportsActions";
import { showRenderedReports } from "../store/renderedReports/renderedReportsActions";
import SingleReport from "./SingleReport";
const ReportList = () => {
  const requredReports = useSelector((state) => state.renderedReports);
  const allReports = useSelector((state) => state.reports);
  const dispatch = useDispatch();

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;
    const [reorderedItem] = allReports.splice(
      result.source.index + requredReports.startIndex,
      1
    );

    allReports.splice(
      result.destination.index + requredReports.startIndex,
      0,
      reorderedItem
    );
    dispatch(addReports(allReports));
    dispatch(showRenderedReports(allReports));
  };

  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr className="align-middle">
          <td>№</td>
          <th>symbol</th>
          <th>ask price</th>
          <th>ask size</th>
          <th>last sale price</th>
          <th>bid size</th>
          <th>last sale price</th>
          <th>last sale size</th>
          <th>last sale time</th>
          <th>last updated</th>
          <th>sector</th>
          <th>security type</th>
          <th>volume</th>
        </tr>
      </thead>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="reports">
          {(provided) => (
            <tbody
              className="reports"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {requredReports.actualReports.map((report, index) => {
                return (
                  <Draggable
                    key={report.id}
                    draggableId={report.id.toString()}
                    index={index}
                  >
                    {(provided) => (
                      <SingleReport provided={provided} {...report} />
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </tbody>
          )}
        </Droppable>
      </DragDropContext>
    </Table>
  );
};

export default ReportList;
