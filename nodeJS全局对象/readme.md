# NodeJS全局对象
    ## JavaScript 中有一个特殊的对象，称为全局对象（Global Object），它及其所有属性都可以在程序的任何地方访问，即全局变量。
    ## 在浏览器 JavaScript 中，通常 window 是全局对象， 而 Node.js 中的全局对象是 global，所有全局变量（除了 global 本身以外）都是 global 对象的属性。
    ## 在 Node.js 我们可以直接访问到 global 的属性，而不需要在应用中包含它。
    ## 因为nodeJS是服务端的语言，取不到window对象，所以在nodeJS上出来了global对象，一个道理，可以这样理解吧

    ### __filename, __dirname全局变量 当前文件的
    ### setTimeout() clearTimeout() serInterval() clearInterval() 计时器相关 
    ### console 方法
        #### console.log()
        #### console.info() 该命令的作用是返回信息性消息，这个命令与console.log差别并不大，除了在chrome中只会输出文字外，其余的会显示一个蓝色的惊叹号。
        #### console.error()输出错误消息的。控制台在出现错误时会显示是红色的叉子。
        #### console.warn() 输出警告消息。控制台出现有黄色的惊叹号。
        #### console.dir() 用来对一个对象进行检查（inspect），并以易于阅读和打印的格式显示。
        #### console.time 输出时间，表示计时开始。
        #### console.timeEnd() 结束时间，表示计时结束。
        #### console.trace() 当前执行的代码在堆栈中的调用路径，这个测试函数运行很有帮助，只要给想测试的函数里面加入 console.trace 就行了。
        #### console.assert() 用于判断某个表达式或变量是否为真，接收两个参数，第一个参数是表达式，第二个参数是字符串。只有当第一个参数为false，才会输出第二个参数，否则不会有任何结果。

    ### process 
        #### process 是一个全局变量，即 global 对象的属性。它用于描述当前Node.js 进程状态的对象，提供了一个与操作系统的简单接口。通常在你写本地命令行程序的时候，少不了要和它打交道。下面将会介绍 process 对象的一些最常用的成员方法。
            ##### exit 当进程准备退出时触发。
            ##### beforeExit 当 node 清空事件循环，并且没有其他安排时触发这个事件。通常来说，当没有进程安排时 node 退出，但是 'beforeExit' 的监听器可以异步调用，这样 node 就会继续执行。
            ##### uncaughtException 当一个异常冒泡回到事件循环，触发这个事件。如果给异常添加了监视器，默认的操作（打印堆栈跟踪信息并退出）就不会发生。
            ##### Signal事件  当进程接收到信号时就触发。信号列表详见标准的 POSIX 信号名，如 SIGINT、SIGUSR1 等。
    
    ### Process
        #### Process 提供了很多有用的属性，便于我们更好的控制系统的交互(这个将会很有用，只是我自己的感觉，哈哈哈哈)
            ##### stdout 标准输出流。
            ##### stderr 标准输入流
            ##### argv argv 属性返回一个数组，由命令行执行脚本时的各个参数组成。它的第一个成员总是node，第二个成员是脚本文件名，其余成员是脚本文件的参数。
            ##### execPath 返回执行当前脚本的 Node 二进制文件的绝对路径。
            ##### execArgv 返回一个数组，成员是命令行下执行脚本时，在Node可执行文件与脚本文件之间的命令行参数。
            ##### env 返回一个对象，成员为当前 shell 的环境变量
            ##### exitCode 进程退出时的代码，如果进程优通过 process.exit() 退出，不需要指定退出码。
            ##### version Node 的版本，比如v0.10.18。
            ##### versions 一个属性，包含了 node 的版本和依赖.
            ##### config 一个包含用来编译当前 node 执行文件的 javascript 配置选项的对象。它与运行 ./configure 脚本生成的 "config.gypi" 文件相同。
            ##### pid 当前进程的进程号。
            ##### title 进程名，默认值为"node"，可以自定义该值。
            ##### arch 当前 CPU 的架构：'arm'、'ia32' 或者 'x64'。
            ##### platform 运行程序所在的平台系统 'darwin', 'freebsd', 'linux', 'sunos' 或 'win32'
            ##### mainModule require.main 的备选方法。不同点，如果主模块在运行时改变，require.main可能会继续返回老的模块。可以认为，这两者引用了同一个模 块。

    ### 关于系统的和获取电脑的相关信息的知识，这个地方会很有用，但是我现在真的看不下去了，太恶心了，等找个时间我会回来再看的