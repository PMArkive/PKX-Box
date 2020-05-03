import React from 'react';
import { InfiniteLoader, MultiGrid } from 'react-virtualized';

export const InfiniteLoadingGrid = ({ infiniteLoaderProps, gridProps }) => {
  const loadInfiniteScroll = React.useCallback(
    ({ onRowsRendered, registerChild }) => (
      <MultiGrid
        {...gridProps}
        onSectionRendered={({ rowStartIndex, rowStopIndex }) =>
          onRowsRendered({
            startIndex: rowStartIndex,
            stopIndex: rowStopIndex,
          })
        }
        ref={registerChild}
      />
    ),
    [gridProps],
  );

  return (
    <InfiniteLoader {...infiniteLoaderProps}>
      {loadInfiniteScroll}
    </InfiniteLoader>
  );
};
