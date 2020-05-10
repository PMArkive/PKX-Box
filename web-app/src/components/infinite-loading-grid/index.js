import React from 'react';
import { InfiniteLoader, MultiGrid } from 'react-virtualized';

export const InfiniteLoadingGrid = ({
  isRowLoaded,
  loadMoreRows,
  rowCount,
  onScroll,
  scrollLeft,
  cellRenderer,
  width,
  height,
  rowHeight,
  columnCount,
  columnWidth,
}) => {
  const loadInfiniteScroll = React.useCallback(
    ({ onRowsRendered, registerChild }) => (
      <MultiGrid
        onScroll={onScroll}
        scrollLeft={scrollLeft}
        cellRenderer={cellRenderer}
        width={width}
        height={height}
        rowHeight={rowHeight}
        rowCount={rowCount}
        columnCount={columnCount}
        columnWidth={columnWidth}
        onSectionRendered={({ rowStartIndex, rowStopIndex }) =>
          onRowsRendered({
            startIndex: rowStartIndex,
            stopIndex: rowStopIndex,
          })
        }
        ref={registerChild}
      />
    ),
    [
      onScroll,
      scrollLeft,
      cellRenderer,
      width,
      height,
      rowHeight,
      rowCount,
      columnCount,
      columnWidth,
    ],
  );

  return (
    <InfiniteLoader
      isRowLoaded={isRowLoaded}
      loadMoreRows={loadMoreRows}
      rowCount={rowCount}
    >
      {loadInfiniteScroll}
    </InfiniteLoader>
  );
};
