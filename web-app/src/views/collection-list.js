import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { useQuery } from "@apollo/react-hooks";
import { MainLayout } from "../layouts/main";
import { GET_COLLECTION_NAMES } from "../graphql/queries/collection-names";
import { TitleCard } from "../components/title-card";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  link: {
    textDecoration: "none"
  }
});

export const CollectionListView = ({ match }) => {
  const classes = useStyles();
  const { userId } = match.params;
  const { data = { collectionNames: [] } } = useQuery(GET_COLLECTION_NAMES, {
    variables: { userId }
  });

  return (
    <MainLayout>
      <Grid container spacing={3}>
        {data.collectionNames.map(collectionName => (
          <Grid item xs={12} sm={6} lg={4} key={collectionName}>
            <Link
              className={classes.link}
              to={`/collection/${userId}/${collectionName}`}
            >
              <TitleCard title={collectionName} />
            </Link>
          </Grid>
        ))}
      </Grid>
    </MainLayout>
  );
};
