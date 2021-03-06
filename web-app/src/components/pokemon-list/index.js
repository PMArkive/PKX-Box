import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import TableCell from '@material-ui/core/TableCell';
import { AutoSizer, MultiGrid, ScrollSync } from 'react-virtualized';
import { InfiniteLoadingGrid } from '../infinite-loading-grid';
import { columns } from './columns';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    // Overwrite react virtualized styles
    '& :first-child > div > .ReactVirtualized__Grid': {
      // I'm against !important, but this seemed to be the better than alternatives this one time
      overflowX: 'hidden !important',
      borderBottom: '1px solid rgba(224, 224, 224, 1)',
      borderTop: '1px solid rgba(224, 224, 224, 1)',
    },
  },
});

const headerRenderer = ({ key, columnIndex, style }) => {
  const column = columns[columnIndex];

  return (
    <TableCell
      component="div"
      key={key}
      style={{
        ...style,
        // Can't use class to override single element styles
        paddingTop: 0,
        paddingBottom: 0,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {column.name}
    </TableCell>
  );
};

const getHeaderColumnWidth = ({ index }) => {
  const lastColumnIndex = columns.length - 1;
  const columnWidth = columns[index].width;

  return index < lastColumnIndex ? columnWidth : columnWidth + 20;
};

const getContentColumnWidth = ({ index }) => columns[index].width;

export const PokemonList = ({
  isViewerOwner,
  ownerId,
  collectionId,
  onDeletePokemon,
  pokemonList,
  loadMoreRows,
  remoteRowCount,
  isLoading,
}) => {
  const classes = useStyles();
  const isRowLoaded = React.useCallback(({ index }) => !!pokemonList?.[index], [
    pokemonList,
  ]);
  const cellRenderer = React.useCallback(
    ({ key, rowIndex, columnIndex, style }) => {
      const pokemonIndex = rowIndex;
      const pokemon = pokemonList?.[pokemonIndex];

      if (isLoading && !pokemon) {
        return <Skeleton key={key} animation="wave" style={style} />;
      }

      const column = columns[columnIndex];
      const Cell = column.cell;
      const cellData =
        pokemon && Cell ? (
          <Cell
            isViewerOwner={isViewerOwner}
            ownerId={ownerId}
            collectionId={collectionId}
            onDeletePokemon={onDeletePokemon}
            {...pokemon}
          />
        ) : (
          ''
        );

      return (
        <TableCell
          component="div"
          key={key}
          style={{
            ...style,
            // Can't use class to override single element styles
            paddingTop: 0,
            paddingBottom: 0,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {cellData}
        </TableCell>
      );
    },
    [
      collectionId,
      isLoading,
      isViewerOwner,
      onDeletePokemon,
      ownerId,
      pokemonList,
    ],
  );

  const HEADER_ROW_HEIGHT = 60;
  const TABLE_ROW_HEIGHT = 88;

  return (
    <AutoSizer>
      {({ height, width }) => (
        <ScrollSync>
          {({ onScroll, scrollLeft }) => (
            <div className={classes.container}>
              <MultiGrid
                cellRenderer={headerRenderer}
                height={HEADER_ROW_HEIGHT}
                // Minus 2 for top and bottom border
                rowHeight={HEADER_ROW_HEIGHT - 2}
                width={width}
                rowCount={1}
                columnCount={columns.length}
                columnWidth={getHeaderColumnWidth}
                scrollLeft={scrollLeft}
                onScroll={onScroll}
              />
              <InfiniteLoadingGrid
                isRowLoaded={isRowLoaded}
                loadMoreRows={loadMoreRows}
                rowCount={remoteRowCount}
                onScroll={onScroll}
                scrollLeft={scrollLeft}
                cellRenderer={cellRenderer}
                width={width}
                height={height - HEADER_ROW_HEIGHT}
                rowHeight={TABLE_ROW_HEIGHT}
                columnCount={columns.length}
                columnWidth={getContentColumnWidth}
              />
            </div>
          )}
        </ScrollSync>
      )}
    </AutoSizer>
  );
};
