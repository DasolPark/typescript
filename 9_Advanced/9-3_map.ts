{
  type Video = {
    title: string;
    author: string;
  };
  type Animal = {
    name: string;
    age: number;
  };
  // [1, 2].map(item => item * item); // [1, 4]

  type Optional<T> = {
    [P in keyof T]?: T[P] // for...in
  };

  type VideoOptional = Optional<Video>;
  const videoOp: VideoOptional = {
    title: 'hi',
  };

  type ReadOnly<T> = {
    readonly [P in keyof T]: T[P]; // for...in
  };
  const readOnlyViedo: ReadOnly<Video> = {
    title: 'parasite',
    author: 'Bong',
  }
  // readOnlyViedo.title = 'hi';

  const animal: Optional<Animal> = {
    name: 'dog',
  };

  type Nullable<T> = {
    [P in keyof T]: T[P] | null;
  };
  const obj2: Nullable<Video> = {
    title: 'hi',
    author: null,
  };

  type Proxy<T> = {
    get(): T;
    set(value: T): void;
  };

  type Proxify<T> = {
    [P in keyof T]: Proxy<T[P]>;
  };
}