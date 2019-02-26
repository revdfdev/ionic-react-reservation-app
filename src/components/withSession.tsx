import React, { Component } from "react";
import { Query } from "react-apollo";
import { GET_CURRENT_USER } from "../queries"

const withSession = (Component: any) => (props: any) => {
  return (
    <Query query={GET_CURRENT_USER}>
      {
        ({ loading, refetch, data }) => {
          if (loading) return null;
          console.log(data);
          return (
            <Component {...props} refetch={refetch} session={data} />
          )
        }
      }
    </Query>
  )
}

export default withSession;