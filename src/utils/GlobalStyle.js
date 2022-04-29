import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  :root {
    --red: #ff0000;
    --orange: #fca400;
    --yellow: #ffff0f;
    --green: #00ff00;
    --blue: #0000ff;
    --navy: #000080;
    --purple: #cd55ff;
  }


  @font-face {
	font-family: 'ber';
	src: url(./assets/fonts/BERNHC.TTF) format('truetype');
}
@font-face {
	font-family: 'stand';
	src: url(./assets/fonts/210\ 스탠다드\ 020.ttf) format('truetype');
}
@font-face {
	font-family: 'Mono';
	src: url(./assets/fonts/Monoton-Regular.ttf) format('truetype');
} 

@font-face {
	font-family: 'Bodo';
	src: url(./assets/fonts/ELEPHNT.TTF) format('truetype');
} 

@font-face {
	font-family: 'Dosis';
	src: url(./assets/fonts/Dosis-Bold.ttf) format('truetype');
} 

@font-face {
	font-family: 'One';
	src: url(./assets/fonts/FrancoisOne-Regular.ttf) format('truetype');
} 

* { font-family: 'Bodo'; color: #222;}

/*보편적 스타일링 reset.css*/
html, body,
div, span,
dl, dt, dd, ul, ol, li,
h1, h2, h3, h4, h5, h6,
blockquote, p, address, pre, cite,
form, fieldset, input, textarea, select,
table, th, td {
	margin:0;
	padding:0;
    background: transparent;
}

h1, h2, h3, h4, h5, h6 {
	font-size:100%;
	font-weight:normal;
	letter-spacing:normal;
}

fieldset, img, abbr,acronym { border:0 none; }

ol, ul { list-style:none; }

table {
	border-collapse: separate;
	border-spacing:0;
	border:0 none;
}
caption, th, td {
	text-align:left;
	font-weight: normal;
	border:0;
}

address, caption, strong, em, cite {
	font-weight:normal;
	font-style:normal;
}
ins { text-decoration:none; }
del { text-decoration:line-through; }

blockquote:before, blockquote:after, q:before, q:after { content:""; }
blockquote,q { quotes:"" ""; }

hr { display:none; }

/* HTML5 Boilerplate  */
article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section { display:block; }
img, video { /*max-width:100%;*/ border:0; vertical-align:middle; }
audio, canvas, video { display:inline-block; *display:inline; *zoom: 1; }
img{image-rendering:-moz-auto;/*firefox*/
image-rendering:-o-auto;/*opera*/
image-rendering:-webkit-optimize-contrast;/*webkit*/
image-rendering:auto;
-ms-interpolation-mode:nearest-neighbor;
-webkit-perspective: 1;}
* { margin:0; padding:0; border:0; outline:0; vertical-align:middle; box-sizing:border-box; }
ul, ol, dl { list-style:none; }
a { vertical-align:middle; text-decoration:none; color:inherit; cursor: pointer;}
table { border-collapse:collapse; border-spacing:0; }
input, select, label { vertical-align:middle; }
button, input, select, textarea { font-size:100%; margin:0; vertical-align:baseline; vertical-align:middle;font-weight:normal;letter-spacing:normal;}
button, input { line-height:normal;}
button, select { text-transform:none; }

select {
     -webkit-appearance: none;/* 네이티브 외형 감추기*/
     -moz-appearance: none;
     appearance: none;
    font-weight:normal;letter-spacing:normal;cursor: pointer;
}
/* IE 10, 11의 네이티브 화살표 숨기기 */
select::-ms-expand {
    display: none;
}
body {width:100%;height:100%;font-size:100%; font-weight:normal;letter-spacing:normal;-webkit-tap-highlight-color: transparent;}

input {-webkit-appearance: none;-webkit-border-radius: 0}
input[type="search"]::-webkit-search-cancel-button, input[type="search"]::-webkit-search-decoration { -webkit-appearance:none; }
input[type="search"] { -webkit-appearance:textfield; -moz-box-sizing:content-box; -webkit-box-sizing:content-box; box-sizing:content-box; }
input[type="number"]::-webkit-outer-spin-button,input[type="number"]::-webkit-inner-spin-button {-webkit-appearance: none;margin: 0;}
button::-moz-focus-inner, input::-moz-focus-inner { border:0; padding:0; }
button, html input[type="button"], input[type="reset"], input[type="submit"] { -webkit-appearance:button; cursor: pointer; *overflow:visible; }
input[type="checkbox"]+label,input[type="radio"]+label{cursor: pointer;}

textarea { overflow:auto; vertical-align:top; resize:none;-webkit-appearance: none;box-shadow:none;-webkit-border-radius: 0}

html,body{ width:100%;background-color:#fff;color:#000;}
address{font-style:normal;}

.fix:before{content:'';display: block;}
.fix:after{content:'';display: block;clear:both;}

::-webkit-scrollbar{width:5px;height:5px;}
::-webkit-scrollbar-track {background-color:#fefefe;}
::-webkit-scrollbar-thumb {background-color:#dbdbdb;border-radius: 3px;}

button{background: transparent;cursor: pointer}

    /*  한줄처리 */
.p_1{
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    word-wrap: break-word;
}

.p_2{
     /* 두줄처리 */
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-wrap: break-word;
}

.nowrap{
       /*    한줄처리  width 값 필요*/
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: break-all;
}

/* input::placeholder{
     color:#888;
}
.swiper-container{
    position: relative;
    overflow: hidden;
} */

/* 스와이퍼 */
/* .swiper-slide > img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
} */

/* date custom */
/* input[type="date"]{
    height:calc( 100vw * ( 65/ 1920))
}

input[type="date"]::-webkit-clear-button,
input[type="date"]::-webkit-inner-spin-button {
    display: none;
}

input[type="date"]::-webkit-calendar-picker-indicator {
    background: url(../src/img/icon/icon_date.svg) no-repeat center center / contain;
} */

/* 아이폰 placeholder */
/* input[type='date']:after {
    color: #888;
    content: attr(placeholder);
 } */

 @media screen and (max-width: 900px) {
    input[type="date"]{
        height: calc(100vw * ( 65/ 428));
    }
 }

  
`;

export default GlobalStyle;
