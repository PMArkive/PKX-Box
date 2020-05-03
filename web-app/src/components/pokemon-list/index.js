import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import TableCell from '@material-ui/core/TableCell';
import { AutoSizer } from 'react-virtualized';
import { InfiniteLoadingGrid } from '../infinite-loading-grid';
import { columns } from './columns';

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
  const isRowLoaded = ({ index }) => !!pokemonList?.[index];
  const getColumnWidth = ({ index }) => columns[index].width;
  const cellRenderer = ({ key, rowIndex, columnIndex, style }) => {
    if (isLoading) return <Skeleton key={key} animation="wave" style={style} />;

    // pokemonIndex === -1 is the header row
    const pokemonIndex = rowIndex - 1;
    const column = columns[columnIndex];
    const Cell = column.cell;
    const pokemon = pokemonList?.[pokemonIndex];
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
        pokemon?.[column.name] || column.header || column.name
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
  };

  return (
    <AutoSizer>
      {({ height, width }) => (
        <InfiniteLoadingGrid
          infiniteLoaderProps={{
            isRowLoaded: isRowLoaded,
            loadMoreRows: loadMoreRows,
            rowCount: remoteRowCount,
          }}
          gridProps={{
            cellRenderer,
            height,
            width,
            rowHeight: 88,
            // +1 for header
            rowCount: remoteRowCount + 1,
            columnCount: columns.length,
            columnWidth: getColumnWidth,
          }}
        />
      )}
    </AutoSizer>
  );
};
