# 面向前端开发者的 unity 开发指引

前端开发者在刚接触 unity 时很容易把其中的 GameObject、Component 等概念和 React 的 JSX、VDom 弄混。但实际上 unity 并没有与 JSX 相对应的概念。

让我们换个思路，把 Unity 的 Editor 看作 DevTools 而非代码编辑器。同时把 Hierarchy 上的节点都看作是 Element 而非 JSX。基于这个思路我们可以对 unity 的概念做一些简单映射：

| unity 概念 | 前端概念 |
| --- | --- |
| Unity Editor | DevTools Inspector |
| Scene | Page / Body |
| GameObject / Prefabs | Element |
| Component | Attributes |

## Instantiate

个人理解 Instantiate 其实更应该叫做 Clone，其作用相当于前端中的 `el.cloneNode(true)`。

## GameObject

在 Hierarchy 中显示的节点，可以理解为页面在**运行时**拿到的 Element，而非前端开发时接触的 JSX。

## Prefab

可以理解为一个脱离了 document 的 Element，我们可以随时 clone 一个复制品出来并添加到当前 document。

## Component

类似于 web 的 Attributes，依附在 GameObject 上运行。我们自定义的 MonoBehaviour 也是一种 Component。

和 `el.setAttribute(...)` 一样，我们可以直接通过 `gameObject.AddComponent<MyBehaviour>()` 为 GameObject 添加 Component。
