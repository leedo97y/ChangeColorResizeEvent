# ChangeColorResizeEvent

JS 챌린지 과제 5 - 5일차

: resize event를 사용하여 사이즈 변경시 배경 색이 바뀌는 페이지 구현

<br>

---

<br>

## 요구사항

\- Resize 이벤트 작성

\- if ... else 구문 사용

\- 사이즈 변경시 작아지면 파란색, 커지면 노란색, 원래 사이즈 근처(?)는 보라색

<br>

---

<br>

## Class 작성

class는 classList, remove, className 등을 이용해 코드 안에 넣고 지울 수 있다.

여기서는 커지면 `wide`, 작아지면 `narrow`, 처음 사이즈 근접할 떄는 `initial`을 사용했다.

<br>

---

<br>

## 범위 작성 전 준비

우선 widthSize라는 변수명에 현재 사이즈 즉, 처음 불러온 페이지의 innerWidth를 저장해준다.
<br>
\- function 코드를 작성하기 전에 작성해줘야 초기세팅이 저장된다.

과제 시연 영상에서 봤을때, 기본 사이즈에서 어느정도 커지더라도 계속 보라색(기본 body 색상)으로 표시되었다.

따라서, 이를 똑같이 구현하기 위해 `narrowSize`와 `wideSize`를 작성했다.

```js
const widthSize = window.innerWide;

const wideSize = widthSize + 100;
const narrowSize = widthSize - 100:
```

<br>

---

<br>

## Function + event 작성

우선 `newWidthSize`에 조정되고 있는 사이즈를 저장해준다.
<br>
그 다음 이 사이즈를 `wideSize`, `narrowSize`와 비교해서 범위를 작성해준다.

`className`을 이용해 class를 생성해주고, `classList.remove`를 이용해 class를 삭제해준다.
<br>
class 생성은 사실 `classList.add`를 해줘도 되는데 왜인진 모르겠지만 오류가 나서 그냥 저렇게 썼다.

<br>

```js
let newWidthSize = window.innerWide;
```

\- 이 코드는 console로 확인했을때 창을 늘릴때마다 달라지는걸 확인할 수 있다.

<br>

```js
function handleResize() {
  let newWidthSize = window.innerWide;

  const wide = "wide";
  const narrow = "narrow";
  const initial = "initial";

  if (newWidthSize > wideSize) {
    body.className = wide;
  } else if (newWidthSize > narrowSize && newWidthSize <= wideSize) {
    body.classList.remove = wide;
    body.className = initial;
  } else if (newWidthSize <= narrowSize) {
    body.classList.remove = initial;
    body.className = narrow;
  }
}

window.addEventListener("resize", handleResize);
```

<br>

---

<br>

## TIL

classList에 추가 삭제하는거 복습한 점이 매우 좋았고, 어떤 부분이 부족했는지 깨달았다.
<br>
그리고 이번에는 요구사항이 if else 써달라는거 빼면 전부 영상안에 있어서 생각보다 어려웠다.
<br>
먼가 자유롭게 하라니까 더 힘든듯 하다...

그래도 배우고 얻어가는게 많은 느낌이다. 이제 event 코드는 눈에 완전히 익어서 반갑기까지 하다.
<br>
그런데 body 코드는 특별한 코드라 document에서 바로 부를 수 있다는 걸 복습하면서 알게 되었다.
<br>
앞으로 복습을 더 빡세게 해야겠다.

그리고 오늘도 챌린지 신청하길 진짜 잘했다고 생각했다..!
<br>
보는거랑 직접 작성하는 것은 역시 천지차이구나,, 싶었다. 생각보다 생각한대로 되지 않았기 떄문.
