tsc --init
npm init -y
mkdir src dist

then creat a index.ts in src which supposed to make a index.js inside dist
but if not then manually create one in dist

then make connection by <script src="./dist/index.js"></script>
then in tsconfig.json set the directory of dist by "outDir": "./dist"

'tsc typeScript\03pureTs\src\index.ts'
and then in main folder whre tsconfi.json exist run 'tsc -w' in terminal
this take it to watch mode which is keep on running for any change in ts file lead to js file based on tsconfig.json

instead of 'tsc index.ts' every time maybe after change 'tsc -w'

then run 'npm i lite-server'
or use live server
