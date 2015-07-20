## JSX Intermediate Representation (JSX-IR) Specification

<img src="https://raw.githubusercontent.com/jsx-ir/logo/master/jsx.png" alt="JSX-IR logo" width="100">

Main purpose of JSX-IR is to unify transpilation output without external dependencies, i.e. transpile JSX directly to JavaScript literals. This brings in ability to use ```jsx-runtime``` as unified entry point for all **JSX -> Something** transformations via special renderers like ```jsx-to-html``` or ```jsx-to-dom```.

### Output definition

Output definition is pretty straightforward and small. It's defined in ```TypeScript``` format:

```typescript
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
```

Here ```JSX.Any``` is not defined and there is a reason. It actually might be just ```any``` type, but in reality not all types are and will be supported by renders. For example, ```jsx-to-dom``` render might accept ```Element``` or ```Function``` as a ```JSX.Property``` or ```JSX.Child``` and handle it correctly, but ```jsx-to-html``` might not support it since it requires stringification of such types.

This is exactly why ```JSX-IR``` is started at all. Extensibility.

_Ver. 1.2.0_

* ``JSX.Element#props`` now accepts ``JSX.Props | Array<JSX.Props>`` instead of ``JSX.Props``
_This means that now spread props should be handled by the runtime, instead of JSX-IR by emitter_

_Ver. 1.1.0_

* ``JSX.Element#tag`` now is ``string | [string, Function]`` instead of ``string``
_This means that now "scoped" (custom) tags should be handled by the runtime, instead of by JSX-IR emitter_

_Ver. 1.0.0_

Initial