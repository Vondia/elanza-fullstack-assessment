import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { fetchOneRequest } from "../store/careRequestDetails/actions";
import { selectCareRequestDetails } from "../store/careRequestDetails/selectors";

export default function CareRequestDetailsPage() {
  const { id } = useParams();
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
              <button>Apply</button>
            </div>
          );
        })
      )}
    </div>
  );
}
