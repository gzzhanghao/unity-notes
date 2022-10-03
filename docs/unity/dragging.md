# Dragging

Unity 中有非常多的方式可以实现拖拽效果，这里列举一些相关 API，具体实现可以根据实际情况组合使用。

## EventSystems

> [相关文档](https://docs.unity3d.com/Packages/com.unity.ugui@1.0/api/UnityEngine.EventSystems.html)

`UnityEngine.EventSystems` package 包含大量 UI 输入相关的事件，其中需要尤其关注 Drag、Drop、Pointer API。

__注意事项：__

- 当前 Scene 下面必须包含一个 EventSystem 对象
- Camera 必须包含 Physics 2D Raycaster 组件
- 拖拽范围由 Collider 2D 组件指定，因此至少要有一个 Collider 2D 组件

__实现代码：__

```csharp
using UnityEngine;
using UnityEngine.EventSystems;

public class Draggable : MonoBehaviour, IDragHandler
{
  public void OnDrag(PointerEventData eventData)
  {
    // 把基于屏幕的坐标转化为世界坐标
    transform.position = eventData.pressEventCamera.ScreenToWorldPoint(eventData.position);
  }
}
```

## MonoBehaviour

- [OnMouseDown](https://docs.unity3d.com/ScriptReference/MonoBehaviour.OnMouseDown.html)
- [OnMouseDrag](https://docs.unity3d.com/ScriptReference/MonoBehaviour.OnMouseDrag.html)
- [OnMouseUp](https://docs.unity3d.com/ScriptReference/MonoBehaviour.OnMouseUp.html)

经典的鼠标事件，可以结合 Input 模块相关 API 手动实现拖拽效果。

## Input

- [Input.mousePosition](https://docs.unity3d.com/ScriptReference/Input-mousePosition.html)
- [Input.GetButtonDown](https://docs.unity3d.com/ScriptReference/Input.GetButtonDown.html)

获取鼠标相关信息，可以结合 MonoBehaviour 中 Mouse 相关事件或 Update 回调自行实现拖拽效果。
