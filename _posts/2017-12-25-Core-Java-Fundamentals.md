---
comments: true
title: Core Java Fundamentals
date: 2017-10-18 17:27:31
layout: post
categories: Reading-Excerpts
tags: java C++ 
---

## Chapter 4: Objects and Classes

### 4.3.6 Benefits of Encapsulation (P154)
不要编写能返回“可变对象（Mutable objects，即该对象存在更改器方法，有被更改的风险）”引用的访问器方法，否则使用这个访问器和直接使用私有数据域没有任何区别，将破坏封装（如对示例中`d`进行`d.setTime(...)`操作即可直接修改私有数据域），如：
```java
class Employee
{
    private Date hireDay;
    ...
    public Date getHireDay()
    {
        return hireDay; // Bad!
    }
}
```
修改时，应对该可变数据域进行“克隆”操作，返回一个新的对象副本：
```java
class Employee
{
    private Date hireDay;
    ...
    public Date getHireDay()
    {
        return (Date) hireDay.clone(); // Good!
    }
}
```
### 4.3.7 Class-Based Access Privileges (P156)
一个方法可以访问所属类所构建对象的所有私有数据！
### 4.3.9 Final Instance Fields (P157)
对于不可变的实例域（如String），需将其定义为`final`，同时保证其被构造器初始化，之后不能再对其修改。（因此不能将`StringBuilder`/`StringBuffer`变量定义为`final`）
>（`final`实例域）final关键字提高了性能。JVM和Java应用都会缓存final变量。
### 4.5 Method Parameters (P157)
>方法不能对基本数据类型（数值和布尔型）参数值进行修改；
>方法不能让对象类型的参数引用一个新的对象（即修改对象参数的引用值）；
>方法可以改变一个对象类型参数的状态（原对象参数及其副本指向同一对象）。

>C++可通过&符号进行对值和对象的引用调用和后续修改操作。