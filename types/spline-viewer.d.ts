declare namespace JSX {
  interface IntrinsicElements {
    'spline-viewer': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    > & {
      url?: string;
      background?: string;
    };
  }
}

type PageProps<T = {}> = {
  params: T;
  searchParams?: { [key: string]: string | string[] | undefined };
};

export {}; 