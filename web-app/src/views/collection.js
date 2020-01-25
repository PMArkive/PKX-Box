import React from "react";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { makeStyles } from "@material-ui/core/styles";
import { MainLayout } from "../layouts/main";
import { GET_COLLECTION } from "../graphql/queries/collection";
import { PKXSummary } from "../components/pkx-summary";

const useStyles = makeStyles({
  link: {
    textDecoration: "none"
  }
});

export const CollectionView = ({ match }) => {
  const classes = useStyles();
  const { userId, collectionName } = match.params;
  const { data = { collection: [] } } = useQuery(GET_COLLECTION, {
    variables: { userId, collectionId: collectionName }
  });

  return (
    <MainLayout>
      <Grid container spacing={3}>
        {data.collection.map(pkx => (
          <Grid item xs={12} sm={6} lg={4} key={pkx.id}>
            <Link className={classes.link} to={`/pkx/${userId}/${pkx.id}`}>
              <PKXSummary userId={userId} pkx={pkx.pkx} />
            </Link>
          </Grid>
        ))}
      </Grid>
    </MainLayout>
  );
};
