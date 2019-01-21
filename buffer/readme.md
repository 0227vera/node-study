# buffer
    ##  Buffer 实例一般用于表示编码字符的序列，比如 UTF-8 、 UCS2 、 Base64 、或十六进制编码的数据。
    
    ##  Buffer 实例与普通的 JavaScript 字符串之间进行相互转换。

    ##  ascii - 仅支持 7 位 ASCII 数据。如果设置去掉高位的话，这种编码是非常快的。

    ##  utf8 - 多字节编码的 Unicode 字符。许多网页和其他文档格式都使用 UTF-8 。

    ##  utf16le - 2 或 4 个字节，小字节序编码的 Unicode 字符。支持代理对（U+10000 至 U+10FFFF）。

    ##  ucs2 - utf16le 的别名。

    ##  base64 - Base64 编码。

    ##  latin1 - 一种把 Buffer 编码成一字节编码的字符串的方式。

    ##  binary - latin1 的别名。

    ##  hex - 将每个字节编码为两个十六进制字符。