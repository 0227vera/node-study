#NodeJS常用工具
    ## util 是一个Node.js 核心模块，提供常用函数的集合，用于弥补核心JavaScript 的功能 过于精简的不足 （作用）
        ### util.inherits
            #### util.inherits(constructor, superConstructor)是一个实现对象间原型继承的函数。JavaScript的面向对象特性是基于原型的，与常见的基于类的不同。JavaScript没有提供对象继承的语言级别特性，而是通过原型复制来实现的。在这里我们只介绍util.inherits的用法， (使用，可以和js上面的call,apply来共同理解)

            ##### util.inherits(子,父); 子不能够继承父原型链上的方法和属性，只能够继承原型中定义的函数和属性

            ##### util.inspect(object,[showHidden],[depth],[colors])是一个将任意对象转换 为字符串的方法，通常用于调试和错误输出。它至少接受一个参数 object，即要转换的对象。showHidden 是一个可选参数，如果值为 true，将会输出更多隐藏信息。depth 表示最大递归的层数，如果对象很复杂，你可以指定层数以控制输出信息的多 少。如果不指定depth，默认会递归2层，指定为 null 表示将不限递归层数完整遍历对象。 如果color 值为 true，输出格式将会以ANSI 颜色编码，通常用于在终端显示更漂亮 的效果。特别要指出的是，util.inspect 并不会简单地直接把对象转换为字符串，即使该对 象定义了toString 方法也不会调用。


            ##### util.isArray(object) 检查是否为一个数组
            ##### util.isRegExp(object) 检查是否为一个正则
            ##### util.isDate(object) 检查是否为一个日期
            ##### util.isError(object) 检查是否为一个错误的对象

        