# Declare

__Declare with `delegate` keyword__

```csharp
// () => void;
public delegate void TestDelegate();
private TestDelegate testDelegateFunction;

// (int) => bool;
public delegate bool TestBoolDelegate(int i);
private TestBoolDelegate testBoolDelegateFunction;
```

__Declare with `Action`__

```csharp
using System;

// () => void;
private Action testAction;

// (int, float) => void;
private Action<int, float> testIntFloatAction;
```

__Declare with `Func`__

```csharp
// () => bool;
private Func<bool> testFunc;

// (int) => bool;
private Func<int, bool> testIntBoolFunc;
```

# Assigning

__Assinging delegate__

```csharp
delegateFunction = delegate () {
  // noop
};
```

__Assigning lambda__

```csharp
delegateFunction = (int i) => {
  return i < 5;
};

// shorthand lambda
delegateFunction = (int i) => i < 5;
```

__Assigning properties / methods / other variables__

```csharp
delegateFunction = MyDelegateFunction;
```

__Push back / remove__

```csharp
delegateFunction += MyDelegateFunction;
delegateFunction -= MyDelegateFunction;
```

# Invoke

```csharp
var result = testBoolDelegateFunction(5);

var result1 = testBoolDelegateFunction?.Invoke(5);
```
