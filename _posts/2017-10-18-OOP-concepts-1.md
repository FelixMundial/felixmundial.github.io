---
comments: true
title: OOP Concepts (1)
date: 2017-10-18 17:27:31
layout: post
categories: Programming-Essentials
tags: C++ C# java
---

## C++

- 静态多态（编译期多态、早绑）

- [ ] 函数重载

- 动态多态（运行时多态）

- [x] 虚函数 & 重写（使用指向**基类**的指针或引用即可对其多态类对象（基类或派生类函数）进行动态调用）
> 父类指针调用子类实例

```cpp
// CPPOverride.cpp: 定义控制台应用程序的入口点。
//
#include "stdafx.h"
#include <iostream>
using namespace std;

class First
{
private:
	int value_First;
public:
	First(int f)
	{
		value_First = f;
	}
	void F1()
	{
		cout << "First.F1()" << endl;
	}
	virtual void F2()
	{
		cout << "First.F2()" << endl;
	}
};
class Second : public First
{
private:
	int value_Second;
public:
	Second(int s) : First(s) // 继承基类构造函数
	{
		value_Second = s;
	}
	void F1()
	{
		cout << "Second.F1()" << endl;
	}
	void F2()
	{
		cout << "Second.F2()" << endl;
	}
};
int main()
{
	First* x1 = new First(1); //First x1(1);
	Second* x2 = new Second(2); //Second x2(2);
	x1->F1(); //First.F1()
	x1->F2(); //First.F2()
	x2->F1(); //Second.F1()
	x2->F2(); //Second.F2()
	x1 = x2; //“向上转型”
	x1->F1(); //First.F1()
	x1->F2(); //虚函数 -> Second.F2()
}
```
- [x] 构造函数无法虚函数化，无法进行动态绑定；
- [x] 静态类成员函数不隶属于任何实例对象，因此也不能虚函数化；
- [x] 当基类指针指向派生类并调用基类指针进行`delete`时，即当基类中有至少一个虚函数时，基类的析构函数必须定义为虚析构函数。

- 继承

- [x] 基类构造函数含参数时，派生类使用基类类名继承基类构造函数，实现通信。

```cpp
    ...
    public :
    B(<Type> x) : A(x)
    {
        var = x;
    }
```


- 纯虚函数/抽象类（接口类）

```cpp
    virtual <Type> Fun() = 0;
```

- [x] C++允许多重继承，当抽象类内全部成员函数均为纯虚函数时即可作为所谓接口类（C++无“接口”概念）。
- [x] 纯虚函数和虚函数定义中均不能出现`static`关键字。

- 重载、重写、隐藏
- [x] 基类与派生类之间作用域不同，不存在重载概念。

重写规则：
- [x] 签名完全相同；返回值不大于基类；
- [x] 重写后访问修饰符不小于基类；
- [x] 重写后抛出的异常不大于基类。

隐藏规则：
- [x] 派生类函数与基类函数签名相同，但基类函数非虚函数，则基类函数被隐藏/屏蔽；
- [x] 派生类函数与基类函数同名，但签名不同，则基类函数被隐藏/屏蔽。

- 虚基类
- [ ] 控制重复继承，使得基类在实例化派生类时只生成一个副本。


## java
- 动态多态（运行时多态）

- [x] 动态绑定为java的默认行为，故java中类方法均为“虚函数”，除非前加`final`关键字（`static`方法、`private`方法以及构造方法也为静态绑定）。

- 继承

- [x] 派生类使用`super`关键字继承基类构造函数。

```java
// JAVA_Override
class First
{
    int value_First;
    public First(int f)
    {
       value_First = f;
    }
    public void F1()
    {
        System.out.println("First.F1()");
    }
}

class Second extends First
{
    int value_Second;
    public Second(int s)
    {
        super(s);
        value_Second = s;
    }
    public void F1()
    {
        System.out.println("Second.F1()");
    }
}

public class Main {

    public static void main(String[] args) {
        First x1 = new First(1);
        Second x2 = new Second(2);
        x1.F1(); // First.F1()
        x2.F1(); // Second.F1()
        x1 = x2;
        x1.F1(); // Second.F1()
    }
}

```

- 抽象方法/接口

- [x] java接口中的方法会被隐式地指定为`public abstract`方法，变量则会被隐式地指定为`public static final`变量。


## C-sharp
- 动态多态（运行时多态）

- [x] C#默认情况下不支持动态多态，如需使用父类引用调用子类方法，需前加`virtual`（父类）和`override`（子类）关键字（彻底重写，父类构造函数也被重写）。
- [x] C#使用`new`（子类）关键字可在向上转型时隐藏子类成员函数（单纯子类方法重载，参数也不要求相同，且不影响向上转型和父类构造函数）。

- 继承

- [x] 派生类使用`base`关键字继承基类构造函数。

```csharp
using System;

namespace CS_Override
{
    class First
    {
        int value_First;
        public First(int f)
        {
            value_First = f;
            Console.WriteLine("Two constructors in First started.");
            this.F1();
            this.F2();
            Console.WriteLine("Two constructors in First ended.");
        }
        public virtual void F1()
        {
            Console.WriteLine("First.F1()");
        }
        public virtual void F2()
        {
            Console.WriteLine("First.F2()");
        }
    }
    class Second : First
    {
        int value_Second;
        public Second(int s) : base(s)
        {
            value_Second = s;
            Console.WriteLine("Two constructors in Second started.");
            this.F1();
            this.F2();
            Console.WriteLine("Two constructors in Second ended.");
        }
        public new void F1()
        {
            Console.WriteLine("Second.F1()");
        }
        public override void F2()
        {
            Console.WriteLine("Second.F2()");
        }
    }
        
    class Program
    {
        static void Main(string[] args)
        {
            First x1 = new First(1); //Two constructors in First started.\nFirst.F1()\n First.F2()\nTwo constructors in First ended.
            Second x2 = new Second(2); //Two constructors in First started.\nFirst.F1()\nSecond.F2()\nTwo constructors in First ended.\nTwo constructors in Second started.\nSecond.F1()\nSecond.F2()\nTwo constructors in Second ended.
            x1.F1(); //First.F1()
            x1.F2(); //First.F2()
            x2.F1(); //Second.F1()
            x2.F2(); //Second.F2()
            x1 = x2; //向上转型
            x1.F1(); //First.F1()
            x2.F2(); //Second.F2()
        }   
    }
}


```