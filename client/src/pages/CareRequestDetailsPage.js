import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { fetchOneRequest } from "../store/careRequestDetails/actions";
import { selectCareRequestDetails } from "../store/careRequestDetails/selectors";
import { Button } from "react-bootstrap";

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
        careDetails.map((detail) => {
          return (
            <div>
              Client Name: {detail.clientName},<br />
              Care Type: {detail.careNeeded}
              <br />
              {detail.startDate}
              <br />
              {detail.endDate}
              <br />
              {detail.extraInformation}
              <br />
              {detail.statusOpen}
              <br />
              <Button>Apply</Button>
            </div>
          );
        })
      )}
    </div>
  );
}
