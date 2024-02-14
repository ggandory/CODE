display는 요소가 보여지는 방식을 지정해주는 속성입니다.

html요소는 기본적으로

display: block과 display: inline 요소를 가지고 있는데요.

display: none
공간을 차지하지 않음, 즉 화면에 아무것도 보여지지 않음

display: block
한 줄을 다 너비로 차지

<div>, <h1>~<h6>, <p> 등	
width, height, margin, padding 가능

display: inline
content만큼만 너비를 가짐
<a>, <span>, <img>
width, height, margin-top, margin-bottom 불가능
(속성을 지정해도 무시가 됨)

display: inline-block
content만큼만 너비를 가짐
width, height, margin-top, margin-bottom 가능
=> 다음줄로 넘어가지 않으면서 너비를 줄 수 있음!

1. block과 inline 비교

<div class="block">block</div>
<span class="inline">inline</span>

밑에 세개의 예시가 다름
.block{
background-color: aqua;
}
.inline{
background-color: green;
}

.block{
background-color: aqua;
width:100px;
height:100px;
}
.inline{
background-color: green;
width:100px;
height:100px;
}

<span class="inline-block">inline</span>
.inline-block{
display:inline-block;
background-color: rgb(166, 216, 166);
width:100px;
height:100px;
}
