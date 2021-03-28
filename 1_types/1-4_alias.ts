{
  /**
   * Type Aliases
   */
  type Text = string;
  const name: Text = 'david';
  const address: Text = 'Korea';
  type Num = number;
  type Student = {
    name: string;
    age: number;
  };
  const student: Student = {
    name: 'david',
    age: 13,
  };

  /**
   * String Literal Types
   */
  type Name = 'name';
  let davidName: Name;
  davidName = 'name';
  type JSON = 'json';
  const json: JSON = 'json';

  type Bool = true;
}