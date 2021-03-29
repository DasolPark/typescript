{
  /**
   * Enum(TS native)
   */

  // JavaScript
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({ "MONDAY": 0, "TUESDAY": 1, "WEDNESDAY": 2 });
  const dayOfToday = DAYS_ENUM.MONDAY;

  // TypeScript
  enum Days {
    Monday, // 0 (automatically)
    Tuesday, // 1
    Wednesday, // 2
    Thursday, // 3
    Friday, // 4
    Saturday, // 5
    Sunday // 6
  }
  console.log(Days.Monday);
  let day: Days = Days.Saturday;
  day = Days.Tuesday;
  day = 10; // error not occurs(critical) 💩
  console.log(day);

  // replace as below✨
  type DaysOfWeek = 'Monday' | 'Tuesday' | 'Wednesday';
  let dayOfWeek: DaysOfWeek = 'Monday';
  dayOfWeek = 'Wednesday';

  // other examples
  enum Nums {
    One = 1, // automatically
    Two,
    Three
  }
  console.log(Nums.One);
  console.log(Nums.Three);

  enum TextNums {
    One = 'One num', // manually
    Two = 'Two num',
    Three = 'Three num',
  }
  console.log(TextNums.One);
}