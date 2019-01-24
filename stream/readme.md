# Node.js Stream(流)
    ## Stream 是一个抽象接口，Node 中有很多对象实现了这个接口。例如，对http服务器发起请求的request 对象就是一个 Stream，还有stdout（标准输出）。
    ## Stream 有四种流类型：
        
        ### 1,Readable - 可读操作。
        
        ### 2,Writable - 可写操作。
        
        ### 3,Duplex - 可读可写操作。
        
        ### 4,Transform - 操作被写入数据，然后读出结果。 （是否可以理解为一旦读入就不可读不可写呢）

        
    ## 所有的Stream都是EventEmitter的实例，常有的事件有：
    
        ### data - 当有数据可读时触发。

        ### end - 没有更多的数据可读时触发。

        ### error - 在接收和写入过程中发生错误时触发。

        ### finish - 所有数据已被写入到底层系统时触发。


#存在得问题
    ## 解压报错的问题

    
    