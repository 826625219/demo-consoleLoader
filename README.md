# The project is a demo of console loader.

The consoleLoader is in src/loader/consoleLoader.js

In config/webpack.config.js, we use it after babel loader to enhance the ability of console

## Result
source code:
![image](https://github.com/826625219/demo-consoleLoader/assets/72744302/17eea98e-4583-4b2a-af38-c740ba15368c)

result:
![image](https://github.com/826625219/demo-consoleLoader/assets/72744302/af395893-c98f-4380-8b74-ae01eac93b9e)


### `why we should use fs module to record the message to code.txt?`

the console message will be overwrited once the webpack finishs compiling. Just show the compiling details:
![image](https://github.com/826625219/demo-consoleLoader/assets/72744302/ab87c9b3-3701-450a-8552-d5080794b6f7)

