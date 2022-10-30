import './login.scss';

export const Login = () => {
    return(
        <div className='login'>
            <div className="top">
                <div className="wrapper">
                    {/*<img src="https://i.amediateka.tech/trim/%7BSIZE%7D/_stor_/cms/assets-dummyasset/f/71/93b885adfe0da089cdf634904fd59f71-1-d77d60a8c40e47ff929b03a5941b993f.png" alt=""/>*/}
                    <img src="https://thumb.tildacdn.com/tild6434-3264-4234-b565-313638626430/-/resize/560x/-/format/webp/photo.png" alt="logo" className="logo"/>
                    <span className='title'>Вход в аккаунт</span>
                    <span className='title2'>Войдите для доступа к подписке и списку избранного</span>
                    <div className="input">
                        <input className='email' type='email' placeholder='Email' autoComplete='off'/>
                        <input className='email' type="password" placeholder='Password' autoComplete='off'/>
                        <span>Забыли пароль?</span>
                        <button className='but'>Войти</button>
                        <span className='net'>Или войдите с помощью социальных сетей</span>
                        <div className="ic">
                            <img className='icons' src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNjBweCIgaGVpZ2h0PSI2MHB4IiB2aWV3Qm94PSIwIDAgNjAgNjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjUgKDY3NDY5KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT4tU3ltYm9scy9JY29ucy9Tb2NpYWwvVksvMTQ0MC9Ob3JtYWw8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0iQWN0aXZhdGUiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJBY3RpdmF0ZS1UVi1VbmF1dGhvcml6ZWQtU2lnbi1Jbi1FbWFpbC0xOTIwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtODQ1LjAwMDAwMCwgLTczOS4wMDAwMDApIj4KICAgICAgICAgICAgPGcgaWQ9IkZvcm0iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDcyMC4wMDAwMDAsIDM2MC4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJTb2NpYWwiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQwLjAwMDAwMCwgMzQxLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxnIGlkPSItU3ltYm9scy9JY29ucy9Tb2NpYWwvVksvMTQ0MC9Ob3JtYWwiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDg1LjAwMDAwMCwgMzguMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgaWQ9Ik92YWwiIGZpbGw9IiM1NjVDNjciIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMC40MDAwMDAwMDYiIGN4PSIzMCIgY3k9IjMwIiByPSIzMCI+PC9jaXJjbGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik00MC45MDU3MiwzMS44MDYyNTU0IEM0MC45MDU3MiwzMS44MDYyNTU0IDQ1LjY0OTE3LDI1LjQ1NzUzODggNDYuMTIwNTIzNiwyMy4zNzEwOTA4IEM0Ni4yNzc1NTU0LDIyLjYyNTk4NDYgNDUuOTMyMDA5NywyMi4yMDg0OTQyIDQ1LjExNTEwNjIsMjIuMjA4NDk0MiBMNDEuMDAwMDQzNywyMi4yMDg0OTQyIEM0MC4wNTc1OTY4LDIyLjIwODQ5NDIgMzkuNzEyMDUxMSwyMi41OTU5ODQ2IDM5LjQyOTM0NDgsMjMuMTYyMzQ1NiBDMzkuNDI5MzQ0OCwyMy4xNjIzNDU2IDM3LjIwNDQ2MjUsMjcuNjYwNDcyNSAzNC40OTczNzg4LDMwLjQ5NDkxMzkgQzMzLjYyODM1NDcsMzEuNDExMjMzMyAzMy4xODY1MDExLDMxLjY4NzAwNzggMzIuNzA2ODEwNywzMS42ODcwMDc4IEMzMi4zMTk4NTkyLDMxLjY4NzAwNzggMzIuMTQxMzk3OSwzMS4zODA5ODI1IDMyLjE0MTM5NzksMzAuNTU0NDExOCBMMzIuMTQxMzk3OSwyMy4zMTE0NjcyIEMzMi4xNDEzOTc5LDIyLjI5ODExNzggMzIuMDE1NzE5MiwyMiAzMS4xMzYyNDQ5LDIyIEwyNC41MzkzODk2LDIyIEMyNC4wMzY2ODEsMjIgMjMuNzIyNDg4MywyMi4yNzcyODA5IDIzLjcyMjQ4ODMsMjIuNjU1NjA4MSBDMjMuNzIyNDg4MywyMy42MDk5NjE2IDI1LjI2MTgzNDEsMjMuODI1NDg1MSAyNS4yNjE4MzQxLDI2LjQxMTI2NDkgTDI1LjI2MTgzNDEsMzEuNzQ2NjMyMSBDMjUuMjYxODM0MSwzMi44MTk3MzAxIDI1LjE5ODk5NTgsMzMuMjM2OTcwMSAyNC42NjQ5MzQsMzMuMjM2OTcwMSBDMjMuMjUxMzk4MSwzMy4yMzY5NzAxIDE5Ljg5MDEzMTEsMjguNjE3MDg1MyAxOC4wMDUzNzIxLDIzLjM3MTA5MDggQzE3LjYyODM0MTEsMjIuMjk4MTE3OCAxNy4yMTk5NTY1LDIyIDE2LjE1MTgzNCwyMiBMMTIuMDM2NzY5NywyMiBDMTEuNDM5ODY5OCwyMiAxMSwyMi4zODczNjQ4IDExLDIyLjk1MzYwMDQgQzExLDIzLjk5NjgyNDMgMTIuMjg3OTkxNiwyOC44MjU1NzkzIDE3LjM0NTYzMzcsMzUuMjkzNjY4NCBDMjAuNzM4MjUzMywzOS42NDUzMTA0IDI1LjE5ODk5NTgsNDIgMjkuMjE5ODY5MSw0MiBDMzEuNjcwMTczNSw0MiAzMi4yNjcwNzQ1LDQxLjYxMjYzNTQgMzIuMjY3MDc0NSw0MC42Mjg5MTA2IEwzMi4yNjcwNzQ1LDM3LjI5MDYxODggQzMyLjI2NzA3NDUsMzYuNDU2MDE0MiAzMi42MTI2MjAzLDM2LjA5ODM5ODUgMzMuMTE1MTk1OCwzNi4wOTgzOTg1IEMzMy42ODA2MTA2LDM2LjA5ODM5ODUgMzQuNjc4NjE5NiwzNi4yNzA3NDIxIDM3LjAxMDUyNDUsMzguNDUzMDkwMSBDMzkuNzc0ODkwNCw0MC45NTY5MDE4IDM5Ljk2MzQwNjQsNDIgNDEuNDcxMzk5Myw0MiBMNDYuMDg5MDM3NCw0MiBDNDYuNTYwMjYxNyw0MiA0Nyw0MS43OTEzODE5IDQ3LDQxLjA0NjI3NTEgQzQ3LDQwLjA2MjU0ODQgNDUuNjQ5MTcsMzguMzA0MDk0NCA0My41NzU4OTM2LDM2LjIxNzUxOTcgQzQyLjcyNzc3MjMsMzUuMTQ0NTQ3MiA0MS4zNDU1ODk0LDMzLjk4MjIwMTQgNDAuOTA1NzIsMzMuNDQ1NzE0NyBDNDAuMjc3NTk5MSwzMi44MTk3MzAxIDQwLjQ2NTk4MTksMzIuNDYxODYzNSA0MC45MDU3MiwzMS44MDYyNTU0IiBpZD0iVksiIGZpbGw9IiNGRkZGRkYiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+" alt=""/>
                            <img className='icons' src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNjBweCIgaGVpZ2h0PSI2MHB4IiB2aWV3Qm94PSIwIDAgNjAgNjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjUgKDY3NDY5KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT4tU3ltYm9scy9JY29ucy9Tb2NpYWwvVksvMTQ0MC9Ob3JtYWw8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0iQWN0aXZhdGUiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJBY3RpdmF0ZS1UVi1VbmF1dGhvcml6ZWQtU2lnbi1Jbi1FbWFpbC0xOTIwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtOTMwLjAwMDAwMCwgLTczOS4wMDAwMDApIj4KICAgICAgICAgICAgPGcgaWQ9IkZvcm0iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDcyMC4wMDAwMDAsIDM2MC4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJTb2NpYWwiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQwLjAwMDAwMCwgMzQxLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxnIGlkPSItU3ltYm9scy9JY29ucy9Tb2NpYWwvMTQ0MC9Hb29nbGUvTm9ybWFsIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNzAuMDAwMDAwLCAzOC4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBpZD0iT3ZhbCIgZmlsbD0iIzU2NUM2NyIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIwLjQwMDAwMDAwNiIgY3g9IjMwIiBjeT0iMzAiIHI9IjMwIj48L2NpcmNsZT4KICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwIiBzdHJva2Utd2lkdGg9IjEiIGZpbGwtcnVsZT0iZXZlbm9kZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTQuMDAwMDAwLCAxNC4wMDAwMDApIiBmaWxsPSIjRkZGRkZGIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0zMC44MDc1MTg4LDE4Ljg2MjcwNjggQzI5LjYzNTYzOTEsMjYuNTYxMDUyNiAyMy44OTYwOTAyLDMwLjk3NDQzNjEgMTYuNDY1MjYzMiwzMC45NzQ0MzYxIEM4LjExNDczNjg0LDMwLjk3NDQzNjEgMS4zNDQ2NjE2NSwyNC4yMDQzNjA5IDEuMzQ0NjYxNjUsMTUuODUzODM0NiBDMS4zNDQ2NjE2NSw3LjUwNTQxMzUzIDguMTE0NzM2ODQsMC43MzUzMzgzNDYgMTYuNDY1MjYzMiwwLjczNTMzODM0NiBDMjAuNTA0NjYxNywwLjczNTMzODM0NiAyNC4wNDQwNjAyLDIuMTc2ODQyMTEgMjYuNjIwMzAwOCw0LjY3OTA5Nzc0IEwyMi4yODA5MDIzLDkuMDE4NDk2MjQgQzIwLjgxMTI3ODIsNy41Mzc4OTQ3NCAxOC44MDAxNTA0LDYuNzQ4NzIxOCAxNi40NjUyNjMyLDYuNzQ4NzIxOCBDMTEuNTQ5Nzc0NCw2Ljc0ODcyMTggNy41NjQ2NjE2NSwxMC45NDAzMDA4IDcuNTY0NjYxNjUsMTUuODUzNjg0MiBDNy41NjQ2NjE2NSwyMC43NzE0Mjg2IDExLjU0OTc3NDQsMjQuODQxMzUzNCAxNi40NjUyNjMyLDI0Ljg0MTM1MzQgQzIwLjU4NTExMjgsMjQuODQxMzUzNCAyMy43MDQ5NjI0LDIyLjg0OTkyNDggMjQuNjA0OTYyNCwxOC44NjI3MDY4IEwxNi40NjUyNjMyLDE4Ljg2MjcwNjggTDE2LjQ2NTI2MzIsMTIuNzkwNTI2MyBMMzAuNzcwNjc2NywxMi43OTA1MjYzIEMzMC45NDI0MDYsMTMuNzY4ODcyMiAzMS4wMjkzMjMzLDE0Ljc5Mjc4MiAzMS4wMjkzMjMzLDE1Ljg1MzY4NDIgQzMxLjAyOTE3MjksMTYuOTA2MDE1IDMwLjk1MzA4MjcsMTcuOTA4MjcwNyAzMC44MDc1MTg4LDE4Ljg2MjcwNjggWiIgaWQ9IlBhdGgiIGZpbGwtcnVsZT0ibm9uemVybyI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=" alt=""/>
                            <img className='icons' src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNjBweCIgaGVpZ2h0PSI2MHB4IiB2aWV3Qm94PSIwIDAgNjAgNjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjUgKDY3NDY5KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT4tU3ltYm9scy9JY29ucy9Tb2NpYWwvVksvMTQ0MC9Ob3JtYWw8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0iQWN0aXZhdGUiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJBY3RpdmF0ZS1UVi1VbmF1dGhvcml6ZWQtU2lnbi1Jbi1FbWFpbC0xOTIwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTAxNS4wMDAwMDAsIC03MzkuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSJGb3JtIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3MjAuMDAwMDAwLCAzNjAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iU29jaWFsIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MC4wMDAwMDAsIDM0MS4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iLVN5bWJvbHMvSWNvbnMvU29jaWFsLzE0NDAvT0svTm9ybWFsIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNTUuMDAwMDAwLCAzOC4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBpZD0iT3ZhbCIgZmlsbD0iIzU2NUM2NyIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIwLjQwMDAwMDAwNiIgY3g9IjMwIiBjeT0iMzAiIHI9IjMwIj48L2NpcmNsZT4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTMwLDE3LjE0Mjg1NzEgQzMyLjI3NDAzNDQsMTcuMTQyODU3MSAzNC4xMjUsMTguODczNDM4MyAzNC4xMjUsMjEuMDAwODggQzM0LjEyNSwyMy4xMjU5NzUgMzIuMjc0MDM0NCwyNC44NTcxNDI5IDMwLDI0Ljg1NzE0MjkgQzI3LjcyNjU5MjgsMjQuODU3MTQyOSAyNS44NzUsMjMuMTI1OTc1IDI1Ljg3NSwyMS4wMDA4OCBDMjUuODc1LDE4Ljg3MzQzODMgMjcuNzI2NTkyOCwxNy4xNDI4NTcxIDMwLDE3LjE0Mjg1NzEgWiBNMzAuMDAwMzAzLDMwIEMyNC42OTI0MzQyLDMwIDIwLjM3NSwyNS45NjQxMTAzIDIwLjM3NSwyMS4wMDE5ODM0IEMyMC4zNzUsMTYuMDM3NTg5NyAyNC42OTI0MzQyLDEyIDMwLjAwMDMwMywxMiBDMzUuMzA4MTcxNywxMiAzOS42MjUsMTYuMDM3NTg5NyAzOS42MjUsMjEuMDAxOTgzNCBDMzkuNjI1LDI1Ljk2NDExMDMgMzUuMzA4MTcxNywzMCAzMC4wMDAzMDMsMzAgWiBNMzMuOTY1NTE3MywzOC4zODMwMzE5IEwzOS40NDUyNTQsNDMuNDU5MjYxMyBDNDAuNTY4NzI1LDQ0LjQ5NjgwMTUgNDAuNTY4NzI1LDQ2LjE4MTczMjQgMzkuNDQ1MjU0LDQ3LjIyMDk4NzQgQzM4LjMyNDI1MTUsNDguMjU5NjcwOSAzNi41MDYyMDk1LDQ4LjI1OTY3MDkgMzUuMzg2NzQ5OCw0Ny4yMjA5ODc0IEwyOS45OTkyNzI5LDQyLjIzMjUwNTkgTDI0LjYxNTgwNzMsNDcuMjIwOTg3NCBDMjQuMDU1MTUxOCw0Ny43Mzk3NTc1IDIzLjMyMDE1OTIsNDcuOTk5Mjg1NCAyMi41ODQyNDEsNDcuOTk5Mjg1NCBDMjEuODQ5ODY1Niw0Ny45OTkyODU0IDIxLjExNjQxNTgsNDcuNzM5NzU3NSAyMC41NTUxNDMyLDQ3LjIyMDk4NzQgQzE5LjQzMzIxNSw0Ni4xODE3MzI0IDE5LjQzMzIxNSw0NC40OTc5NDQ4IDIwLjU1MzkwODksNDMuNDU5MjYxMyBMMjYuMDMyNzE5OSwzOC4zODMwMzE5IEMyNC4wMzgxODA5LDM3Ljk2MjAxMzYgMjIuMTEzMzc2OCwzNy4yMjk3MzMyIDIwLjM0MjIzNiwzNi4xOTkwNTI4IEMxOS4wMDAzMDM4LDM1LjQxNjE4MTYgMTguNTk2NzA1OSwzMy43NzQ5ODE4IDE5LjQ0MTg1NDcsMzIuNTMxMzYyOCBDMjAuMjg1NzY5MywzMS4yODYzMTQ2IDIyLjA1NzUyNzIsMzAuOTExODg1NSAyMy40MDEzMTA4LDMxLjY5NDc1NjcgQzI3LjQxNDE0OCwzNC4wMzI1MDkgMzIuNTgzMTYzNiwzNC4wMzM2NTIzIDM2LjU5ODQ2OTIsMzEuNjk0NzU2NyBDMzcuOTQxMzI3MiwzMC45MTE4ODU1IDM5LjcxMzcwMjEsMzEuMjg2MzE0NiA0MC41NTgyMzM5LDMyLjUzMTM2MjggQzQxLjQwMzM4MjgsMzMuNzczODM4NSA0MC45OTk0NzYzLDM1LjQxNjE4MTYgMzkuNjU3NTQ0LDM2LjE5OTA1MjggQzM3Ljg4NjQwMzMsMzcuMjMwNTkwNyAzNS45NjA5ODIsMzcuOTYyMDEzNiAzMy45NjU1MTczLDM4LjM4MzAzMTkgWiIgaWQ9Im9rIiBmaWxsPSIjRkZGRkZGIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==" alt=""/>
                            <img className='icons' src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNjBweCIgaGVpZ2h0PSI2MHB4IiB2aWV3Qm94PSIwIDAgNjAgNjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjUgKDY3NDY5KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT4tU3ltYm9scy9JY29ucy9Tb2NpYWwvVksvMTQ0MC9Ob3JtYWw8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0iQWN0aXZhdGUiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJBY3RpdmF0ZS1UVi1VbmF1dGhvcml6ZWQtU2lnbi1Jbi1FbWFpbC0xOTIwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTEwMC4wMDAwMDAsIC03MzkuMDAwMDAwKSIgZmlsbC1ydWxlPSJub256ZXJvIj4KICAgICAgICAgICAgPGcgaWQ9IkZvcm0iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDcyMC4wMDAwMDAsIDM2MC4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJTb2NpYWwiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQwLjAwMDAwMCwgMzQxLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxnIGlkPSItU3ltYm9scy9JY29ucy9Tb2NpYWwvMTQ0MC9ZYW5kZXgvTm9ybWFsIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzNDAuMDAwMDAwLCAzOC4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBpZD0iT3ZhbCIgZmlsbD0iIzU2NUM2NyIgb3BhY2l0eT0iMC40MDAwMDAwMDYiIGN4PSIzMCIgY3k9IjMwIiByPSIzMCI+PC9jaXJjbGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0zOCwxNCBMMzEuNzQ4NTYxLDE0IEMyNi45Mzc1Njc1LDE0IDIyLjA4MzAzMjgsMTcuNDAxMzc1IDIyLjA4MzAzMjgsMjUuMDAwMzc1IEMyMi4wODMwMzI4LDI4LjkzNjUgMjMuODI1MzkzNCwzMi4wMDIwNjI1IDI3LjAxOTM2MiwzMy43NDU1IEwyMCw0NiBMMjYuNDIzMTEsNDYgTDMyLjMwNDE1MDIsMzQuODggTDMyLjcwNDE3OTYsMzQuODggTDMyLjcwNDE3OTYsNDYgTDM4LDQ2IEwzOCwxNCBaIE0zMi42OTQxMDk1LDMwLjMyMzE4NzUgTDMxLjk4ODQ0NCwzMC4zMjMxODc1IEMyOS4yNTIyNzY3LDMwLjMyMzE4NzUgMjcuNjE4ODAxNCwyOC4xODQ4MTI1IDI3LjYxODgwMTQsMjQuNjAzIEMyNy42MTg4MDE0LDIwLjE0OTMxMjUgMjkuNjgyMjY5MSwxOC41NjI1IDMxLjYxMzQ4MTcsMTguNTYyNSBMMzIuNjk0MTA5NSwxOC41NjI1IEwzMi42OTQxMDk1LDMwLjMyMzE4NzUgWiIgaWQ9IllhbmRleCIgZmlsbD0iI0ZGRkZGRiI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+" alt=""/>
                        </div>
                    </div>
                </div>
                <div className="log">
              <span>
                  Уже зарегистрированы?
                  <a href="a">
                        Войдите в аккаунт
                  </a>
              </span>
                </div>
            </div>
        </div>
    );
}