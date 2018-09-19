import * as React from 'react';

export interface PageNotFoundProps {
}

export interface PageNotFoundState {
}

export class PageNotFound extends React.Component<PageNotFoundProps, PageNotFoundState> {
  constructor(props: PageNotFoundProps) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <div>
        404: Page Not Found
      </div>
    );
  }
}
