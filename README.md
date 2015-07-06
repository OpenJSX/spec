![JSX-IR logo](https://raw.githubusercontent.com/jsx-ir/logo/master/jsx.png =100x)

## JSX Intermediate Representation (JSX-IR) Specification

Main purpose of JSX-IR is to unify transpilation output without external dependencies, i.e. transpile JSX directly to JavaScript literals. This brings in ability to use ```jsx-runtime``` as unified entry point for all **JSX -> Something** transformations via special renderers like ```jsx-to-html``` or ```jsx-to-dom```.

### Output definition

Output definition is pretty straightforward and small. It's defined in ```TypeScript``` format:

```typescript
interface JSXTagDecsriptor {
    tag: string;
    children: JSXChildren;
    props: {
        [index: string]: JSXProp;
    };
}
```

```typescript
var JSXChildren: JSXChild[]|JSXChildren[];
```

```typescript
var JSXChild: JSXTagDescriptor|JSXAny;
```

```typescript
var JSXProp: JSXTagDescriptor|JSXAny;
```

```typescript
var JSXAny: ...;
```

Here ```JSXAny``` is not defined and there is a reason. It actually might be just ```any``` type, but in really not all types are and will be supported by renders. For example, ```jsx-to-dom``` render might accept ```Element``` or ```Function``` as a ```JSXProp``` or ```JSXChild``` and handle it correctly, but ```jsx-to-html``` might not support it since it requires stringification of such types.

This is exactly why ```JSX-IR``` is started at all. Extensibility.