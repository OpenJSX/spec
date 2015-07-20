_Ver. 1.1.0_

* ``JSX.Element#props`` now accepts ``JSX.Props | Array<JSX.Props>`` instead of ``JSX.Props``
_This means that now spread props should be handled by the runtime, instead of JSX-IR by emitter_

_Ver. 1.1.0_

* ``JSX.Element#tag`` now is ``string | [string, Function]`` instead of ``string``
_This means that now "scoped" (custom) tags should be handled by the runtime, instead of by JSX-IR emitter_

_Ver. 1.0.0_

Initial