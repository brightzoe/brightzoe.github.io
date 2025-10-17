# 设计模式

## 发布订阅模式 Publish-Subscribe Pattern

举个生活中的例子，想排公租房，有一个平台供大家填写需求信息。公租房平台有房源时，会主动通知订阅这些信息的人。而不需要这些人主动去咨询公租房平台。

发布订阅模式是一个基础的软件设计概念，可以帮助解耦应用程序中的组件，允许它们以动态和灵活的方式彼此通信。分为发布者和订阅者两种不同的身份，发布者和订阅者不需要强耦合在一起。

发布订阅模式可以用于替代回调函数。比如订阅ajax的error/success 等事件，当有事件发生时，发布者会通知订阅者。

### 发布订阅的常见场景

- addEventListener

  通过 addEventListener 函数，可以订阅 Click Change 等事件，等到事件触发时则会收到消息。

  可以随时增加、删减订阅某个事件的订阅者。对订阅者的修改不会影响发布者。

- Vue 的 EventBus

  $on/$emit 等，及 provide/inject

- React 中实现发布订阅机制

  利用 context 实现一个 provider

### 实现一个发布订阅模式的核心

核心逻辑：

- 指定发布者：发布消息并且不需要关心订阅者
- 一个缓存列表（事件中心）-用于记录订阅的每个key及需要分发的消息
- 发布者在需要通知订阅者的时候，遍历缓存列表，通知订阅者

```ts
class PubSub<T> {
  private list: Map<string, ((...args: T[]) => void)[]>;
  constructor() {
    this.list = new Map();
  }
  private addSubscriber(eventName: string) {
    if (!this.list.has(eventName)) {
      this.list.set(eventName, []);
    }
  }
  removeSubscriber(eventName: string, subscriber: (...args: T[]) => void) {
    const subscribers = this.list.get(eventName);
    if (!subscribers) return;

    const filteredSubscribers = subscribers.filter((s) => s !== subscriber);
    if (filteredSubscribers.length) {
      this.list.set(eventName, filteredSubscribers);
    } else {
      // 这条消息没有订阅了，key也删掉
      this.list.delete(eventName);
    }
  }
  publish(eventName: string, ...args: T[]) {
    if (this.list.has(eventName)) {
      const subscribers = this.list.get(eventName);
      if (!subscribers) return;
      subscribers.forEach((subscriber) => {
        subscriber(...args);
      });
    }
  }
  subscribe(eventName: string, subscriber: (...args: T[]) => void) {
    this.addSubscriber(eventName);
    const subscribers = this.list.get(eventName);
    if (subscribers) {
      subscribers.push(subscriber);
    }
    return {
      // 方便订阅者取消订阅
      unsubscribe: () => this.removeSubscriber(eventName, subscriber),
    };
  }

  // 只订阅一次的实现
  once(eventName: string, subscriber: (...args: any[]) => void) {
    const wrapper = (...args: any[]) => {
      subscriber(...args);
      this.removeSubscriber(eventName, subscriber);
    };

    this.subscribe(eventName, wrapper);
  }
}
const pubSubInstance = new PubSub<string>();
const subscription = pubSubInstance.subscribe('dudu', (e) => {
  console.log('duud', e);
});
pubSubInstance.publish('dudu', '123');
subscription.unsubscribe();
```

### 优点

- 解耦：发布者和订阅者之间没有直接的依赖关系，发布者和订阅者可以独立地发展和变化，互不影响。
- 灵活：可以自由地添加和删除订阅者。
- 可扩展性：可以方便地添加新的消息类型，也可以方便地添加新的订阅者。

### 缺点

- 订阅的消息有可能一直不发生，导致对内存的占用一直存在。
- 发布订阅模式弱化了发布者和订阅者之间的联系。过度使用。对象和对象之间的必要联系也将埋藏再最后，导致程序难以跟踪维护和理解。特别是有多个发布者和订阅者嵌套在一起的情况。

### 功能扩展

1. 必须先订阅再发布？有些场景可能需要缓存先发布的消息，等订阅来了再推送过去

   比如购物平台：用户搜索商品-商家发布商品

2. 事件变多了可能存在命名冲突。提供命名空间的功能解决命名冲突问题

## Reference

- [发布订阅模式](https://weread.qq.com/web/reader/6bf3215071a123016bf0b74k7cb321502467cbbc409e62d?)
- [发布订阅模式](https://zhuanlan.zhihu.com/p/190678728)

## 观察者模式 Observer Pattern

定义对象间一对多的依赖关系，使得一个对象的变化，它的所有依赖者都能收到通知并自动更新。

### 观察者模式实现

核心：

- 一个观察者
- 可以指定多个依赖者
- 观察者变化，自动通知依赖者更新

```ts
interface Observer {
  update(subject: Subject): void;
}
interface Subject {
  addObserver(observer: Observer): void;
  removeObserver(observer: Observer): void;
  notify(): void;
}

class ConcreteSubject implements Subject {
  private observers: Set<Observer> = new Set();
  private state: any;
  addObserver(observer: Observer): void {
    this.observers.add(observer);
  }
  removeObserver(observer: Observer): void {
    this.observers.delete(observer);
  }
  notify(): void {
    this.observers.forEach((o) => o.update(this));
  }
  // 状态改变了，通知观察者
  changeState(state: any): void {
    this.state = state;
    this.notify();
  }
}
class ConcreteObserver implements Observer {
  update(subject: Subject): void {
    console.log('update', subject);
  }
}
const subject = new ConcreteSubject();
const observer = new ConcreteObserver();
const observer1 = new ConcreteObserver();

subject.addObserver(observer);
subject.addObserver(observer1);
subject.changeState({ hh: 111 });
```

### 观察者和发布订阅模式的异同

相同点：

- 两者都是事件驱动的架构模式，用于在系统中的不同部分之间传递消息。

## 不同点：

- 观察者模式定义了一对多的依赖关系，需要在被观察者变化时，通知观察者更新。而发布订阅模式事件通道介于订阅者和发布者之间，耦合性更低。
- 观察者模式中的观察者与被观察者是强依赖的。发布订阅模式中发布者和订阅者是解耦的，通过事件通道来传递消息。
- 观察者模式中的观察者是被迫执行更新的，函数签名需要保持一致。而发布订阅模式中订阅者可以自定义更新函数逻辑。

[观察者模式与发布订阅模式的不同](https://juejin.cn/post/6844903603107266567?searchId=202403011331144A44AD417F7670695D47)
