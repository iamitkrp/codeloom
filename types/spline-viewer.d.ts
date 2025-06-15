declare namespace JSX {
  interface IntrinsicElements {
    'spline-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      url: string;
      ref?: React.Ref<HTMLElement>;
    };
  }
}

type PageProps<T = {}> = {
  params: T;
  searchParams?: { [key: string]: string | string[] | undefined };
}; 