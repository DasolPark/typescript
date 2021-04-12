{
  interface Stack<T> {
    readonly size: number;
    push(value: T): void;
    pop(): T;
  }

  type StackNode<T> = {
    value: T;
    next?: StackNode<T>;
  }

  class StackImpl<T> implements Stack<T> {
    private _size: number = 0;
    private head?: StackNode<T>;

    constructor(private capacity: number) { }

    get size() {
      return this._size;
    }

    push(value: T) {
      if (this.size >= this.capacity) {
        throw new Error('full stack!');
      }

      const node = { value, next: this.head };
      this.head = node;
      this._size++;
    }

    pop(): T {
      if (this.head == null) {
        throw new Error('empty stack!');
      }
      const node = this.head;
      this.head = node?.next;
      return node?.value;
    }
  }

  const stack = new StackImpl(30);
  stack.push(1);
  stack.push('a');
  stack.push(true);
  stack.push({ name: 'david' });

  while (stack.size !== 0) {
    console.log(stack.pop());
  }
}