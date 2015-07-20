declare module JSX {
  interface Element {
    tag: string | [string, Function];
    props: JSX.Props | Array<JSX.Props>;
    children: JSX.Children;
  }

  type Children = Array<JSX.Child | JSX.Children[]>;
  type Props = {
    [index: string]: JSX.Property;
  };

  type Child = JSX.Element | JSX.Any;
  type Property = JSX.Element | JSX.Any;

  type Any = ...; // any
}
