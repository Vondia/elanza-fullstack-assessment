import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { fetchOneRequest } from "../store/careRequestDetails/actions";
import { selectCareRequestDetails } from "../store/careRequestDetails/selectors";
import { Button } from "react-bootstrap";
import { changeCareStatus } from "../store/careRequestDetails/actions";
import moment from "moment";

export default function CareRequestDetailsPage() {
  const { id } = useParams();
  console.log("id", id);
  const dispatch = useDispatch();
  const careDetails = useSelector(selectCareRequestDetails);

  useEffect(() => {
    dispatch(fetchOneRequest(id));
  }, [dispatch, id]);

  return (
    <div>
      <h1>Care Request Details</h1>
      {!careDetails ? (
        <p>loading...</p>
      ) : (
        careDetails.map((detail, index) => {
          return (
            <div key={index}>
              Client Name: {detail.clientName},<br />
              Care Type: {detail.careNeeded}
              <br />
              {moment(detail.startDate).format("dddd DD MMMM")}
              <br />
              {moment(detail.endDate).format("dddd DD MMMM")}
              <br />
              {detail.extraInformation}
              <br />
              {detail.statusOpen}
              <br />
              {detail.statusOpen ? (
                <Button
                  onClick={(e) => {
                    e.preventDefault();

                    dispatch(changeCareStatus(detail.id, detail.statusOpen));
                    console.log(
                      `this is the detail id:`,
                      detail.id,
                      detail.statusOpen
                    );
                  }}
                >
                  Apply
                </Button>
              ) : (
                <Button
                  onClick={(e) => {
                    e.preventDefault();

                    dispatch(changeCareStatus(detail.id, detail.statusOpen));
                    console.log(`this is the detail id:`, detail.id);
                  }}
                >
                  re-Open
                </Button>
              )}
            </div>
          );
        })
      )}
    </div>
  );
}
