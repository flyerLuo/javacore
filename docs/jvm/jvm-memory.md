# Java 内存管理

> **📦 本文以及示例源码已归档在 [javacore](https://github.com/dunwu/javacore/)**

## 一、内存简介

### 物理内存和虚拟内存

所谓物理内存就是通常所说的 RAM（随机存储器）。

虚拟内存使得多个进程在同时运行时可以共享物理内存，这里的共享只是空间上共享，在逻辑上彼此仍然是隔离的。

### 内核空间和用户空间

一个计算通常有固定大小的内存空间，但是程序并不能使用全部的空间。因为这些空间被划分为内核空间和用户空间，而程序只能使用用户空间的内存。

### 使用内存的 Java 组件

Java 启动后，作为一个进程运行在操作系统中。

有哪些 Java 组件需要占用内存呢？

- 堆内存：Java 堆、类和类加载器
- 栈内存：线程
- 本地内存：NIO、JNI

## 二、运行时数据区域

JVM 在执行 Java 程序的过程中会把它所管理的内存划分为若干个不同的数据区域。这些区域都有各自的用途，以及创建和销毁的时间，有的区域随着虚拟机进程的启动而存在，有些区域则依赖用户线程的启动和结束而建立和销毁。如下图所示：

![img](http://dunwu.test.upcdn.net/cs/java/javacore/jvm/jvm-memory-runtime-data-area.png!zp)

### 程序计数器

**`程序计数器（Program Counter Register）`** 是一块较小的内存空间，它可以看做是**当前线程所执行的字节码的行号指示器**。

为了线程切换后能恢复到正确的执行位置，每条线程都需要一个独立的程序计数器，各条线程间的计数器互不影响，独立存储，我们称这类内存区域为 “线程私有” 的内存。

- 如果线程正在执行的是一个 Java 方法，这个计数器记录的是正在执行的虚拟机字节码指令的地址；
- 如果正在执行的是 Native 方法，这个计数器值则为空（Undefined）。

> 🔔 注意：此内存区域是唯一一个在 JVM 中没有规定任何 `OutOfMemoryError` 情况的区域。

### Java 虚拟机栈

**`Java 虚拟机栈（Java Virtual Machine Stacks）`** 也**是线程私有的，它的生命周期与线程相同**。

每个 Java 方法在执行的同时都会创建一个栈帧（Stack Frame）用于存储 **局部变量表**、**操作数栈**、**常量池引用** 等信息。每一个方法从调用直至执行完成的过程，就对应着一个栈帧在 Java 虚拟机栈中入栈和出栈的过程。

![img](http://dunwu.test.upcdn.net/cs/java/javacore/jvm/jvm-stack.png!w640)

> 🔔 注意：
>
> 该区域可能抛出以下异常：
>
> - 如果线程请求的栈深度超过最大值，就会抛出 `StackOverflowError` 异常；
> - 如果虚拟机栈进行动态扩展时，无法申请到足够内存，就会抛出 `OutOfMemoryError` 异常。
>
> 💡 提示：
>
> 可以通过 `-Xss` 这个虚拟机参数来指定一个程序的 Java 虚拟机栈内存大小：
>
> ```java
> java -Xss=512M HackTheJava
> ```

### 本地方法栈

**`本地方法栈（Native Method Stack）`** 与虚拟机栈的作用相似。

二者的区别在于：**虚拟机栈为 Java 方法服务；本地方法栈为 Native 方法服务**。

![img](http://dunwu.test.upcdn.net/cs/java/javacore/jvm/jvm-native-method-stack.gif!w640)

> 🔔 注意：本地方法栈也会抛出 `StackOverflowError` 异常和 `OutOfMemoryError` 异常。

### Java 堆

**`Java 堆（Java Heap）` 的作用就是存放对象实例，几乎所有的对象实例都是在这里分配内存**。

Java 堆是垃圾收集的主要区域（因此也被叫做"GC 堆"）。现代的垃圾收集器基本都是采用**分代收集算法**，该算法的思想是针对不同的对象采取不同的垃圾回收算法。

因此虚拟机把 Java 堆分成以下三块：

- **`新生代（Young Generation）`**
  - `Eden`
  - `From Survivor`
  - `To Survivor`
- **`老年代（Old Generation）`**
- **`永久代（Permanent Generation）`**

当一个对象被创建时，它首先进入新生代，之后有可能被转移到老年代中。新生代存放着大量的生命很短的对象，因此新生代在三个区域中垃圾回收的频率最高。

![img](http://dunwu.test.upcdn.net/cs/java/javacore/jvm/jvm-heap.gif!w640)

> 🔔 注意：Java 堆不需要连续内存，并且可以动态扩展其内存，扩展失败会抛出 `OutOfMemoryError` 异常。
>
> 💡 提示：可以通过 `-Xms` 和 `-Xmx` 两个虚拟机参数来指定一个程序的 Java 堆内存大小，第一个参数设置初始值，第二个参数设置最大值。
>
> ```java
> java -Xms=1M -Xmx=2M HackTheJava
> ```

### 方法区

**`方法区（Method Area）` 用于存放已被加载的类信息、常量、静态变量、即时编译器编译后的代码等数据**。

对这块区域进行垃圾回收的主要目标是对常量池的回收和对类的卸载，但是一般比较难实现。

> 🔔 注意：和 Java 堆一样不需要连续的内存，并且可以动态扩展，动态扩展失败一样会抛出 `OutOfMemoryError` 异常。
>
> 💡 提示：JDK 1.7 之前，HotSpot 虚拟机把它当成永久代来进行垃圾回收，JDK 1.8 之后，取消了永久代，用 **`metaspace（元数据）`**区替代。

### 运行时常量池

**`运行时常量池（Runtime Constant Pool）` 是方法区的一部分**，Class 文件中除了有类的版本、字段、方法、接口等描述信息，还有一项信息是常量池（Constant Pool Table），**用于存放编译器生成的各种字面量和符号引用**，这部分内容会在类加载后被放入这个区域。

除了在编译期生成的常量，还允许动态生成，例如 `String` 类的 `intern()`。这部分常量也会被放入运行时常量池。

> 🔔 注意：当常量池无法再申请到内存时会抛出 `OutOfMemoryError` 异常。

### 直接内存

直接内存（Direct Memory）并不是虚拟机运行时数据区的一部分，也不是 JVM 规范中定义的内存区域。

在 JDK 1.4 中新加入了 NIO 类，它可以使用 Native 函数库直接分配堆外内存，然后通过一个存储在 Java 堆里的 `DirectByteBuffer` 对象作为这块内存的引用进行操作。这样能在一些场景中显著提高性能，因为避免了在 Java 堆和 Native 堆中来回复制数据。

> 🔔 注意：直接内存这部分也被频繁的使用，且也可能导致 `OutOfMemoryError` 异常。
>
> 💡 提示：直接内存容量可通过 `-XX:MaxDirectMemorySize` 指定，如果不指定，则默认与 Java 堆最大值（`-Xmx` 指定）一样。

### Java 内存区域对比

| 内存区域      | 内存作用范围   | 异常                                       |
| ------------- | -------------- | ------------------------------------------ |
| 程序计数器    | 线程私有       | 无                                         |
| Java 虚拟机栈 | 线程私有       | `StackOverflowError` 和 `OutOfMemoryError` |
| 本地方法栈    | 线程私有       | `StackOverflowError` 和 `OutOfMemoryError` |
| Java 堆       | 线程共享       | `OutOfMemoryError`                         |
| 方法区        | 线程共享       | `OutOfMemoryError`                         |
| 运行时常量池  | 线程共享       | `OutOfMemoryError`                         |
| 直接内存      | 非运行时数据区 | `OutOfMemoryError`                         |

## 二、OutOfMemoryError

在 JVM 规范中，**除了程序计数器区域外，其他运行时区域都可能发生 `OutOfMemoryError` 异常（简称 OOM）**。

下面逐一介绍 OOM 发生场景。

### Java 堆溢出

【现象】Java 堆空间不足时的错误现象：

```
Exception in thread "main" java.lang.OutOfMemoryError: Java heap space
```

这个错误是指：Java 堆内存已经达到 `-Xmx` 设置的最大值。Java 堆用于存储对象实例。只要不断地创建对象，并且保证 GC Roots 到对象之间有可达路径来避免垃圾收集器回收这些对象，那么当堆空间到达最大容量限制后就会产生 OOM。

【排查】

排查重点在于：判断是 **`内存泄漏（Memory Leak）`** 还是 **`内存溢出（Memory Overflow）`**。

使用 jstack 和 jmap 生成 threaddump 和 heapdump，然后用内存分析工具（如：Eclipse Memory Analyzer）进行分析。

【处理】

- 如果是内存泄漏，可以进一步查看泄漏对象到 GC Roots 的对象引用链。这样就能找到泄漏对象是怎样与 GC Roots 关联并导致 GC 无法回收它们的。掌握了这些原因，就可以较准确的定位出引起内存泄漏的代码。
- 如果不存在内存泄漏，即内存中的对象确实都必须存活着，则应当检查虚拟机的堆参数（`-Xmx` 和 `-Xms`），与机器物理内存进行对比，看看是否可以调大。并从代码上检查是否存在某些对象生命周期过长、持有时间过长的情况，尝试减少程序运行期的内存消耗。

> 可以使用 `-XX:+HeapDumpOnOutOfMemoryError` 参数来让虚拟机出现 OOM 的时候，自动生成 dump 文件，这个文件中记录了当前 Java 堆的快照信息。

示例：

```java
public class HeapOOM1 {

    public static void main(String[] args) {
        List<OomObject> list = new ArrayList<>();
        while (true) {
            list.add(new OomObject());
        }
    }

    static class OomObject {}

}
```

执行 `java -verbose:gc -Xms10M -Xmx10M -XX:+HeapDumpOnOutOfMemoryError io.github.dunwu.javacore.jvm.memory.HeapOutOfMemoryDemo`

### 虚拟机栈和本地方法栈溢出

对于 HotSpot 虚拟机来说，栈容量只由 `-Xss` 参数来决定。

- 如果线程请求的栈深度大于虚拟机所允许的最大深度，将抛出 `StackOverflowError` 异常。
- 如果虚拟机在扩展栈时无法申请到足够的内存空间，则抛出 `OutOfMemoryError` 异常。

从实战来说，栈溢出的常见原因：

- 递归函数调用层数太深
- 大量循环或死循环
- 数组、List、Map 数据过大

示例：递归函数调用层数太深导致 `StackOverflowError`

```java
public class StackOverflowDemo {

    private int stackLength = 1;

    public void recursion() {
        stackLength++;
        recursion();
    }

    public static void main(String[] args) {
        StackOverflowDemo obj = new StackOverflowDemo();
        try {
            obj.recursion();
        } catch (Throwable e) {
            System.out.println("栈深度：" + obj.stackLength);
            e.printStackTrace();
        }
    }

}
```

示例：类成员循环依赖，导致 `StackOverflowError`

```java
public class StackOverflowDemo2 {

	public static void main(String[] args) {
		A obj = new A();
		System.out.println(obj.toString());
	}

	static class A {

		private int value;

		private B instance;

		public A() {
			value = 0;
			instance = new B();
		}

		@Override
		public String toString() {
			return "<" + value + ", " + instance + ">";
		}

	}

	static class B {

		private int value;

		private A instance;

		public B() {
			value = 10;
			instance = new A();
		}

		@Override
		public String toString() {
			return "<" + value + ", " + instance + ">";
		}

	}

}
```

### 方法区和运行时常量池溢出

【现象】元数据空间不足的错误提示：

```
Exception in thread "main" java.lang.OutOfMemoryError: Metaspace
```

【原因】**元数据区的内存不足，即方法区和运行时常量池的空间不足**。

方法区用于存放 Class 的相关信息，如类名、访问修饰符、常量池、字段描述、方法描述等。

一个类要被垃圾收集器回收，判定条件是比较苛刻的。在经常动态生成大量 Class 的应用中，需要特别注意类的回收状况。这类常见除了 CGLib 字节码增强和动态语音意外，常见的还有：大量 JSP 或动态产生 JSP 文件的应用（JSP 第一次运行时需要编译为 Java 类）、基于 OSGi 的应用（即使是同一个类文件，被不同的加载器加载也会视为不同的类）等。

【排查】占用已经达到 `-XX:MaxMetaspaceSize` 设置的最大值，排查思路和上面的一致，参数方面可以通过 `-XX:MaxMetaspaceSize` 来进行调整。

【处理】如何调整元数据空间：

- 在 JDK6 及之前的版本中，可以通过 `-XX:PermSize` 和 `-XX:MaxPermSize` 设置永久代空间大小，从而限制方法区大小，并间接限制其中常量池的容量。

- JDK8 及以后，JVM 永久代内存改为元数据空间，可以通过 `-XX:MetaspaceSize` 和 `-XX:MaxMetaspaceSize` 调整。

【示例】方法区出现 `OutOfMemoryError`

```java
public class MethodAreaOutOfMemoryDemo {

    public static void main(String[] args) {
        while (true) {
            Enhancer enhancer = new Enhancer();
            enhancer.setSuperclass(Bean.class);
            enhancer.setUseCache(false);
            enhancer.setCallback(new MethodInterceptor() {
                @Override
                public Object intercept(Object obj, Method method, Object[] args, MethodProxy proxy) throws Throwable {
                    return proxy.invokeSuper(obj, args);
                }
            });
            enhancer.create();
        }
    }

    static class Bean {}

}
```

启动时指定如下 VM 参数：

- (JDK8 以前) - `-XX:PermSize=10m -XX:MaxPermSize=10m`
- (JDK8 及以后) - `-XX:MetaspaceSize=10m -XX:MaxMetaspaceSize=10m`

### 直接内存溢出

由直接内存导致的内存溢出，一个明显的特征是在 Head Dump 文件中不会看见明显的异常，如果发现 OOM 之后 Dump 文件很小，而程序中又直接或间接使用了 NIO，就可以考虑检查一下是不是这方面的原因。

示例：直接内存 `OutOfMemoryError`

```java
public class DirectOutOfMemoryDemo {

    private static final int _1MB = 1024 * 1024;

    public static void main(String[] args) throws IllegalAccessException {
        Field unsafeField = Unsafe.class.getDeclaredFields()[0];
        unsafeField.setAccessible(true);
        Unsafe unsafe = (Unsafe) unsafeField.get(null);
        while (true) {
            unsafe.allocateMemory(_1MB);
        }
    }

}
```

启动时，指定 VM 参数 `-Xmx20M -XX:MaxDirectMemorySize=10M`

## 参考资料

- [《深入理解 Java 虚拟机》](https://item.jd.com/11252778.html)
- [从表到里学习 JVM 实现](https://www.douban.com/doulist/2545443/)
